import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await User.find({});
  return NextResponse.json({ hello: "world", users });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ data: body });
}

export async function PUT(request: Request, params: { id: string }) {
  try {
    const body = await request.json();
    return NextResponse.json({ data: { ...body, id: params.id } });
  } catch (error: any) {
    return NextResponse.error();
  }
}
