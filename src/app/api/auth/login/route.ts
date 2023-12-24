import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import connect from "@/libs/mongo";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;
  await connect();
  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({
      success: false,
      message: "Email không tồn tại",
    });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json({
      success: false,
      message: "Mật khẩu không đúng",
    });
  }
  return NextResponse.json({
    success: true,
    message: "Đăng nhập thành công",
  });
}
