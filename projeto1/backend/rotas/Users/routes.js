//2//
import { Router } from "express";
//3//
import UserController from "../../controller/UserController";
////
const routes = Router();
routes.post("/Register", UserController.register);
routes.post("/Login", UserController.login);

export default routes;
////
