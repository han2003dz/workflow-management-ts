import { Request, Response } from "express";
import md5 from "md5";
import User from "../models/user.model";
import { generateRandomString } from "../../../helpers/generate";
import { resolveSoa } from "dns";

// [POST] /api/v1/users/register
export const register = async (req: Request, res: Response) => {
  const emailExist = await User.findOne({
    email: req.body.email,
    deleted: false,
  });

  if (emailExist) {
    res.json({
      code: 400,
      message: "Email đã tồn tại!",
    });
  } else {
    const newUser = {
      fullName: req.body.fullName,
      email: req.body.email,
      password: md5(req.body.password),
      token: generateRandomString(30),
    };

    const user = new User(newUser);
    const data = await user.save();

    const token = data.token;

    res.json({
      code: 200,
      message: "Tạo tài khoản thành công!",
      token: token,
    });
  }
};

// [POST] /api/v1/users/login
export const login = async (req: Request, res: Response) => {
  const email: string = req.body.email;
  const password: string = req.body.password;

  const user = await User.findOne({
    email: email,
    password: password,
  });

  if (!user) {
    res.status(400).json({
      code: 400,
      message: "Email không tồn tại!",
    });
    return;
  }

  if (md5(password) !== user.password) {
    res.status(400).json({
      code: 400,
      message: "Sai mật khẩu, vui lòng nhập lại!",
    });
  }

  const token = user.token;

  res.json({
    code: 200,
    message: "Đăng nhập thành công!",
    token: token,
  });
};

// 