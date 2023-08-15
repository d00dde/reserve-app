import jwt from "jsonwebtoken";
import { UserModel } from "../model/UserModel.js";
import { config } from "../../config/server_config.js";

class TokenService {
  generate(payload) {
    const accessToken = jwt.sign(payload, config.JWT_ACCESS_SECRET, { expiresIn: "30m" });
    const refreshToken = jwt.sign(payload, config.JWT_REFRESH_SECRET, { expiresIn: "30d" });
    return {
      accessToken,
      refreshToken,
    }
  }

  validateAccessToken(token) {
    try {
      return jwt.verify(token, config.JWT_ACCESS_SECRET);
    }
    catch (err) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      return jwt.verify(token, config.JWT_REFRESH_SECRET);
    }
    catch (err) {
      return null;
    }
  }

  async saveToken(userId, refreshToken) {
    await UserModel.setRefreshToken(userId, refreshToken);
  }

  async removeToken(refreshToken) {
    await UserModel.deleteRefreshToken(refreshToken);
  }

  async findToken(refreshToken) {
    return UserModel.findUserByToken(refreshToken);
  }
}

export const tokenService = new TokenService();
