import express from "express";
import cors from "cors";
import routes from "./rotas/Users/routes";
const app = new express();
//mensagem json
app.use(express.json());
//cors front-end
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use();
app.listen(5000);
