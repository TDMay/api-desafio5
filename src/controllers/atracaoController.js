import atracao  from "../models/Atracao.js";

class AtracaoController {

  static async listarAtracoes (req, res) {
    try {
      const ListaAtracoes = await atracao.find({});
      res.status(200).json(ListaAtracoes);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  };

  static async listarAtracaoPorId (req, res) {
    try {
      const id = req.params.id;
      const AtracaoEncontrada = await atracao.findById(id);
      res.status(200).json(AtracaoEncontrada);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição da atração` });
    }
  };

  static async cadastrarAtracao (req, res) {
    const novaAtracao = req.body;
    try {
      await atracao.create(novaAtracao);
      res.status(201).json({ message: "criado com sucesso"});
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar atracao` });
    }
  }

  static async atualizarAtracao (req, res) {
    try {
      const id = req.params.id;
      await atracao.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "atracao atualizado" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na atualização` });
    }
  };

  static async excluirAtracao (req, res) {
    try {
      const id = req.params.id;
      await atracao.findByIdAndDelete(id);
      res.status(200).json({ message: "atracao excluído com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  };

  static async listarAtracoesPorEndereco (req, res) {
    const endereco = req.query.editora;
    try {
      const atracoesPorEndereco = await atracao.find({ endereco });
      res.status(200).json(atracoesPorEndereco);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na busca` });
    }
  }
};

export default AtracaoController;
