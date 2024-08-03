import express from "express";
import atracao from "./atracaoRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

  app.use(express.json(), atracao);
};

export default routes;
