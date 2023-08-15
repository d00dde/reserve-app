import { ApiErrorHelper } from "../src/helper/ApiErrorHelper.js";
import { tokenService } from "../src/service/TokenService.js";
import { UserModel } from "../src/model/UserModel.js";

export async function adminMiddleware(req, res, next) {
  try {
    const { accessToken } = req.cookies;
    const userData = tokenService.validateAccessToken(accessToken);
    if(!userData) {
      next(ApiErrorHelper.unauthorized());
    }
    const userFromDb = await UserModel.getUserById(userData.id);
    if(userFromDb.role !== "admin") {
      next(ApiErrorHelper.forbidden());
    }
    req.userData = userFromDb;
    next();
  }
  catch (err) {
    next(ApiErrorHelper.unauthorized());
  }
}
