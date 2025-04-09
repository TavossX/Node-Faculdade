import Pet from "../models/Pet.js";
import mongoose from "mongoose";
import getToken from "../helpers/get-token.js";
import getUserByToken from "../helpers/get-user-by-token.js";

export default class PetController {
  static async create(req, res) {
    const {
      nome,
      idade,
      raca,
      corPredominante,
      corOlhos,
      especie,
      genero,
      porte,
      local,
      pontoReferencia,
      data,
      recompensa,
      situacao,
      comentario,
    } = req.body;
    const imagens = req.files;
    if (!corPredominante.lenght === 0) {
      res.status(422).json({ message: "Escolha a cor predominante seu Pet!" });
      return;
    }
    if (imagem.lenght === 0) {
      res.status(422).json({ message: "Escolha a imagem de seu Pet!" });
      return;
    }
    const token = getToken(req);
    const user = getUserByToken(token);

    const pet = new Pet({
      nome,
      idade,
      raca,
      corPredominante,
      corOlhos,
      especie,
      genero,
      porte,
      local,
      pontoReferencia,
      data,
      recompensa,
      situacao,
      comentario,
      user: {
        _id: user._id,
        nome: user.nome,
        phone: user.phone,
        email: user.email,
      },
      imagem: [],
    });
    imagens.map((image) => {
      pet.imagem.push(image.filename);
    });
    try {
      const newPet = await pet.save();
      res.status(200).json({ message: "Pet cadastrado com sucesso!" }, newPet);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  static async getAll(req, res) {
    const pets = await Pet.find({ situacao: { $ne: "Finalizado" } }).sort(
      "-createdAt"
    );
    res.status(200).json({ pets });
  }
}
