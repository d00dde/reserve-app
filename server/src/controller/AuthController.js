import { validationResult } from "express-validator";
import { userService } from "../service/UserService.js";
import { UserModel } from "../model/UserModel.js";
import { ApiErrorHelper } from "../helper/ApiErrorHelper.js";
import { tokenService } from "../service/TokenService.js";

class AuthController {
  async register(req, res, next) {
    try {
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
        throw ApiErrorHelper.badRequest("Validation error", errors.array());
      }
      const { name, phone, password } = req.body;
      const tokens = await userService.registration(name, phone, password);
      res.cookie("accessToken", tokens.accessToken, { maxAge: 2592000000, httpOnly: true });
      res.cookie("refreshToken", tokens.refreshToken, { maxAge: 2592000000, httpOnly: true });
      res.json({ message: "New user created" });
    }
    catch(err) {
      next(err);
    }
  }

  async activate(req, res, next) {
    try {
      const { id } = req.params;
      await UserModel.activate(id);
      res.json({ message: `User with id: ${id} activated` });
    }
    catch(err) {
      next(err);
    }
  }

  async login(req, res, next) {
    try {
      const { phone, password } = req.body;
      const tokens = await userService.login(phone, password);
      res.cookie("accessToken", tokens.accessToken, { maxAge: 2592000000, httpOnly: true });
      res.cookie("refreshToken", tokens.refreshToken, { maxAge: 2592000000, httpOnly: true });
      res.json({ message: "Login successful" });
    }
    catch(err) {
      next(err);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      await userService.logout(refreshToken);
      res.clearCookie("accessToken");
      res.clearCookie("refreshToken");
      res.json({ message: "Logout successful" });
    }
    catch(err) {
      next(err);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const tokens = await userService.refresh(refreshToken);
      res.cookie("accessToken", tokens.accessToken, { maxAge: 2592000000, httpOnly: true });
      res.cookie("refreshToken", tokens.refreshToken, { maxAge: 2592000000, httpOnly: true });
      res.json({ message: "Refresh successful" });
    }
    catch(err) {
      next(err);
    }
  }

  async whoAmI(req, res, next) {
    try {
      const { accessToken } = req.cookies;
      const userData = tokenService.validateAccessToken(accessToken);
      if(!userData) {
        return res.json({ role: "none", name: "" });
      }
      const userFromDb = await UserModel.getUserById(userData.id);
      if(userFromDb.role === "admin") {
        return res.json({ role: "admin", name: userFromDb.name });
      }
      if(userFromDb.role === "user") {
        return res.json({ role: "user", name: userFromDb.name });
      }
      return res.json({ role: "none", name: "" });
    }
    catch(err) {
      next(err);
    }
  }
}

export const authController = new AuthController();
