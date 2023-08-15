import { ApiErrorHelper } from "../src/helper/ApiErrorHelper.js";
import { tokenService } from "../src/service/TokenService.js";
import { UserModel } from "../src/model/UserModel.js";

export async function userMiddleware(req, res, next) {
  try {
    const { accessToken } = req.cookies;
    const userData = tokenService.validateAccessToken(accessToken);
    if(!userData) {
      throw new Error("Invalid token");
    }
    req.userData = await UserModel.getUserById(userData.id);
    next();
  }
  catch (err) {
    next(ApiErrorHelper.unauthorized());
  }
}
