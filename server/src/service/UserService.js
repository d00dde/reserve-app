import bcrypt from "bcrypt";
import { UserModel } from "../model/UserModel.js";
import { phoneService } from "./PhoneService.js";
import {tokenService} from "./TokenService.js";
import {ApiErrorHelper} from "../helper/ApiErrorHelper.js";

class UserService {
  async registration(name, phone, password) {
    const existUser = await UserModel.getUserByPhone(phone);
    if (existUser) {
      throw ApiErrorHelper.badRequest(`User with phone number ${phone} already exist`);
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const newUser = await UserModel.addUser(name, phone, hashPassword);
    await phoneService.confirmRequest(newUser);
    const tokens = tokenService.generate({ id: newUser.id, name: newUser.name });
    await tokenService.saveToken(newUser.id, tokens.refreshToken);
    return tokens;
  }

  async login(phone, password) {
    const existUser = await UserModel.getUserByPhone(phone);
    if (!existUser) {
      throw ApiErrorHelper.badRequest(`User with phone number ${phone} not found`);
    }
    const isPasswordCorrect = await bcrypt.compare(password, existUser.password);
    if (!isPasswordCorrect) {
      throw ApiErrorHelper.badRequest("Incorrect password");
    }
    const tokens = tokenService.generate({ id: existUser.id, name: existUser.name });
    await tokenService.saveToken(existUser.id, tokens.refreshToken);
    return tokens;
  }

  async logout(refreshToken) {
    await tokenService.removeToken(refreshToken);
  }

  async refresh(refreshToken) {
    if(!refreshToken) {
      throw ApiErrorHelper.unauthorized();
    }
    const userData = await tokenService.validateRefreshToken(refreshToken);
    const userFromDb = await tokenService.findToken(refreshToken);
    if(!userData || !userFromDb) {
      throw ApiErrorHelper.unauthorized();
    }
    const tokens = tokenService.generate({ id: userFromDb.id, name: userFromDb.name });
    await tokenService.saveToken(userFromDb.id, tokens.refreshToken);
    return tokens;
  }
}

export const userService = new UserService();
