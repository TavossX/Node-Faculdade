import mongoose from "mongoose";
const { Schema } = mongoose;
const petSchema = new Schema(
  {
    name: {
      type: String,
    },
    idade: {
      type: String,
    },
    raca: {
      type: String,
    },
    corPredominante: {
      type: String,
      required: true,
    },
    corOlhos: {
      type: String,
      required: true,
    },
    especie: {
      type: String,
      required: true,
    },
    genero: {
      type: String,
      required: true,
    },
    porte: {
      type: String,
      required: true,
    },
    local: {
      type: String,
      required: true,
    },
    pontoReferencia: {
      type: String,
      required: true,
    },
    data: {
      type: Date,
      required: true,
    },
    recompensa: {
      type: Number,
    },
    user: {
      type: Object,
      required: true,
    },
    situcao: {
      type: String,
      required: true,
    },
    imagem: {
      type: String,
      required: true,
    },
    comentario: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Pet = mongoose.model("Pet", petSchema);
export default Pet;
