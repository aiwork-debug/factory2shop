import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    if (!supabase) {
      return NextResponse.json(
        {
          ok: false,
          configured: false,
          message:
            "Supabase is not configured yet. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local.",
        },
        { status: 200 }
      );
    }

    const { data, error } = await supabase.from("profiles").select("id").limit(1);

    if (error && error.code !== "PGRST116") {
      return NextResponse.json(
        {
          ok: false,
          configured: true,
          message: error.message,
        },
        { status: 200 }
      );
    }

    return NextResponse.json({
      ok: true,
      configured: true,
      message: "Supabase connection is active and healthy.",
      hasRows: !!data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        configured: false,
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
