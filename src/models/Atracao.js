import mongoose from "mongoose";

const atracaoSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  endereco: { type: String},
  latitude: { type: Number},
  longitude: {type: Number},
  imagens: { type: Array },
}, { versionKey: false });

const atracao = mongoose.model("atracao", atracaoSchema);

export default atracao;
