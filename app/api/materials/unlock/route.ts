import { NextResponse } from "next/server";
import {
  getSupabaseServerClient,
  type MaterialDay,
  type MaterialRecord,
} from "@/lib/supabase";

const validDays: MaterialDay[] = ["day1", "day2", "day3"];

type UnlockBody = {
  day?: string;
  code?: string;
};

export async function POST(request: Request) {
  let body: UnlockBody;

  try {
    body = (await request.json()) as UnlockBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_payload" },
      { status: 400 },
    );
  }

  const day = body.day;
  const code = body.code?.trim();

  if (!day || !validDays.includes(day as MaterialDay) || !code) {
    return NextResponse.json(
      { ok: false, error: "invalid_payload" },
      { status: 400 },
    );
  }

  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return NextResponse.json(
      { ok: false, error: "not_configured" },
      { status: 503 },
    );
  }

  const { data, error } = await supabase
    .from("materials")
    .select("day, code_hash_or_code, title, description, url, type, is_active")
    .eq("day", day)
    .eq("is_active", true)
    .maybeSingle<MaterialRecord>();

  if (error || !data) {
    return NextResponse.json(
      { ok: false, error: "invalid_code" },
      { status: 401 },
    );
  }

  const normalizedInput = code.toLocaleLowerCase("ru-RU");
  const normalizedStored = data.code_hash_or_code
    .trim()
    .toLocaleLowerCase("ru-RU");

  if (normalizedInput !== normalizedStored) {
    return NextResponse.json(
      { ok: false, error: "invalid_code" },
      { status: 401 },
    );
  }

  return NextResponse.json({
    ok: true,
    material: {
      title: data.title,
      description: data.description,
      url: data.url,
      type: data.type,
    },
  });
}
