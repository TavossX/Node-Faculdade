import { Router } from "express";
import PetController from "../../controllers/PetController.js";
import verifiyToken from "../../helpers/verify-token.js";
import imageUpload from "../../helpers/image-upload.js";
const routes = Router();
routes.post(
  "/Create",
  verifyToken,
  imageUpload.array("imagem"),
  PetController.create
);
routes.post("getAll", PetController.getAll);
export default routes;
