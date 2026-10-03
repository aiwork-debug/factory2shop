create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  full_name text,
  company_name text,
  mobile text,
  role text not null default 'buyer' check (role in ('buyer', 'supplier')),
  city text,
  address text,
  created_at timestamptz not null default now()
);

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  description text,
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  supplier_id uuid not null references public.profiles(id) on delete cascade,
  category_id uuid references public.categories(id),
  name text not null,
  sku text,
  description text,
  price numeric(10,2) not null default 0,
  moq integer not null default 1,
  stock integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.batches (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  title text not null,
  description text,
  target_moq integer not null,
  current_moq integer not null default 0,
  price numeric(10,2) not null,
  status text not null default 'open' check (status in ('open', 'closed', 'pending')),
  created_by uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  buyer_id uuid not null references public.profiles(id) on delete cascade,
  batch_id uuid not null references public.batches(id) on delete cascade,
  quantity integer not null,
  total_price numeric(10,2) not null default 0,
  status text not null default 'pending' check (status in ('pending', 'paid', 'shipped', 'completed', 'cancelled')),
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.batches enable row level security;
alter table public.orders enable row level security;

create policy "Users can view their own profile"
on public.profiles
for select
using (auth.uid() = id);

create policy "Users can update their own profile"
on public.profiles
for update
using (auth.uid() = id);

create policy "Users can insert their own profile"
on public.profiles
for insert
with check (auth.uid() = id);

create policy "Public read categories"
on public.categories
for select
using (true);

create policy "Suppliers can manage their products"
on public.products
for all
using (auth.uid() = supplier_id)
with check (auth.uid() = supplier_id);

create policy "Anyone can view open batches"
on public.batches
for select
using (status = 'open');

create policy "Buyers can create orders"
on public.orders
for insert
with check (auth.uid() = buyer_id);

create policy "Users can view their own orders"
on public.orders
for select
using (auth.uid() = buyer_id);

create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, company_name, mobile, role, city, address)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'company_name',
    new.raw_user_meta_data->>'mobile',
    coalesce(new.raw_user_meta_data->>'role', 'buyer'),
    new.raw_user_meta_data->>'city',
    new.raw_user_meta_data->>'address'
  )
  on conflict (id) do update set
    email = excluded.email,
    full_name = excluded.full_name,
    company_name = excluded.company_name,
    mobile = excluded.mobile,
    role = excluded.role,
    city = excluded.city,
    address = excluded.address;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();
