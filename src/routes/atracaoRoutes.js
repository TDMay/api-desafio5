import express from "express";
import atracaoController from "../controllers/atracaoController.js";

const routes = express.Router();

routes.get("/atracao", atracaoController.listarAtracoes);
routes.get("/atracao/busca", atracaoController.listarAtracoesPorEndereco);
routes.get("/atracao/:id", atracaoController.listarAtracaoPorId);
routes.post("/atracao", atracaoController.cadastrarAtracao);
routes.put("/atracao/:id", atracaoController.atualizarAtracao);
routes.delete("/atracao/:id", atracaoController.excluirAtracao);
 
export default routes;
