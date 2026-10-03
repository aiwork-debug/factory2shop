# Supabase setup for Factory2Shop

1. Create a new Supabase project.
2. Open SQL Editor.
3. Run the contents of `schema.sql`.
4. Add the following environment variables to `.env.local`:

NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

5. Start the app with `npm run dev`.
6. Use the login/register page to create a user.
7. The user profile and related fields will be saved into the `profiles` table.
