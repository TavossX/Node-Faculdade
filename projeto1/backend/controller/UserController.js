import { User } from "../models/User";
export default class UserController {
  static async register(req, res) {
    res.json({ message: "Olá" });
  }
}
