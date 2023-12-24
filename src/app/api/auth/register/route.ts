import "@/libs/mongo";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  // IUser
  const { name, email, password, adharCard, mobile, dob } = body;
  const user = await User.create({
    name,
    email,
    password,
    adharCard,
    mobile,
    dob,
  });

  return NextResponse.json({ user });
}
