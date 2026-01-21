import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getHeroSection } from "@/lib/services/hero.service";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email } = body;

  const [result] = await db.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email]
  );

  return NextResponse.json(result);
}

export async function GET() {
  const data = getHeroSection();
  return NextResponse.json(data);
}

export async function PUT(req: Request) {
  const { id, name, email } = await req.json();

  await db.query("UPDATE users SET name=?, email=? WHERE id=?", [
    name,
    email,
    id,
  ]);

  return NextResponse.json({ message: "Updated" });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  await db.query("DELETE FROM users WHERE id=?", [id]);

  return NextResponse.json({ message: "Deleted" });
}
