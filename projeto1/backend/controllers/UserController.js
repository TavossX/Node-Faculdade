//6//
import User from "../models/User.js";
import Argon2 from "argon2";
import jwt from "jsonwebtoken";
import createUserToken from "../helpers/create-token.js";
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
        //token se for logar apos o registro do usuario desconectar a linha abaixo
        //await createUserToken(newUser, req, res);
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
  static async login(req, res) {
    const { email, password } = req.body;
    if (!email) {
      res.status(422).json({ message: "The email is required" });
      return;
    }
    if (!password) {
      res.status(422).json({ message: "The password is required" });
      return;
    }
    const userExist = await User.findOne({ email: email });
    if (!userExist) {
      return res.status(422).json({ message: "Incorrect Credentials" });
    }
    //Verificar Senha
    const checkPassword = await Argon2.verify(userExist.password, password);
    if (!checkPassword) {
      return res.status(422).json({ message: "Incorrect Credentials" });
    }
    //Gerar Token (create-token.js)
    await createUserToken(userExist, req, res);
  }
}
////
