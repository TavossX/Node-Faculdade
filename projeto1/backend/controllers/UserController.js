//6//
import User from "../models/User.js";
import Argon2 from "argon2";
////
//3//
export default class UserController {
  static async register(req, res) {
    // res.json({ message: "Olá" });
    const { name, email, phone, password, confirmpassword } = req.body;
    //validar
    if (!name) {
      res.status(422).json({ message: "The name is required" });
      return;
    }
    if (!email) {
      res.status(422).json({ message: "The email is required" });
      return;
    }
    if (!phone) {
      res.status(422).json({ message: "The phone is required" });
      return;
    }
    if (!password) {
      res.status(422).json({ message: "The password is required" });
      return;
    }
    if (!confirmpassword) {
      res.status(422).json({ message: "Confirm the password!" });
      return;
    }
    if (password !== confirmpassword) {
      res.status(422).json({ message: "The passwords are different!" });
      return;
    }
    try {
      const userExist = await User.findOne({ email: email });
      if (userExist) {
        res.status(422).json({ message: "The email is already registered!" });
        return;
      }
      const passwordHash = await Argon2.hash(password, {
        type: Argon2.argon2id,
        memoryCost: 2 ** 16,
        parallelism: 1,
      });
      //salvar user
      const user = new User({
        name,
        email,
        phone,
        password: passwordHash,
      });
      try {
        const newUser = await user.save();
        return res.status(201).json({ message: "User created!", newUser });
      } catch (error) {
        res.status(500).json({ message: "Error when tried to create a user!" });
        return;
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error!" });
      return;
    }
  }
  static async login(req, res) {}
}
////
