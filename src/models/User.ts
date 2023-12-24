import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema: Schema = new Schema(
  {
    name: {
      firstName: {
        type: String,
        required: [true, "Điền họ của bạn"],
      },
      lastName: {
        type: String,
        required: [true, "Điền tên của bạn"],
      },
    },
    dob: {
      type: Date,
      required: [true, "Điền ngày sinh của bạn"],
      default: "2002-01-01",
    },
    mobile: {
      type: String,
      required: [true, "Điền số điện thoại của bạn"],
      // minlength: [10, "Please Enter a valid Mobile Number"],
      default: "123456789",
    },
    email: {
      type: String,
      unique: [true, "Email đã tồn tại"],
    },
    adharCard: {
      type: String,
      //   required: [true, "Điền số chứng minh nhân dân của bạn"],
      unique: [true, "Số chứng minh nhân dân đã tồn tại"],
    },
    password: {
      type: String,
      required: [true, "Điền mật khẩu của bạn"],
      minlength: [6, "Mật khẩu phải có ít nhất 6 ký tự"],
    },
    role: {
      type: String,
      enum: ["doctor", "admin"],
      default: "doctor",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export interface IUser extends Document {
  name: {
    firstName: string;
    lastName: string;
  };
  dob: Date;
  mobile: string;
  email: string;
  adharCard: string;
  password: string;
  role: string;
}

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
