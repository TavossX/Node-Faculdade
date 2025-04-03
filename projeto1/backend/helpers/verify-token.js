import jwt from "jsonwebtoken";
import getToken from "./get-token";
const checkToken = (req, res, next) => {
  if (!req.headers.Authorization) {
    return res.status(401).json({ message: "Acesso negado!" });
  }
  const token = getToken(req);
  if (!token) {
    res.status(401).json({ message: "Acesso negado!" });
  }
  try {
    const verified = jwt.verify(token, "meusegredo");
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: "Token inválido!" });
  }
};
