import { Request, Response } from "express";
import { knex } from "../../bd/conexao";
import { Carro } from "../../utils/tipos";

const listaCarros = async (_: Request, res: Response) => {
  try {
    const carros = await knex("carros");
    return res.json(carros);
  } catch {
    return res
      .status(500)
      .json({ mensagem: "Erro interno do servidor em listar carros" });
  }
};

const detalharCarro = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const carro = await knex<Carro>("carros")
      .where({ id: Number(id) })
      .first();
    if (!carro) {
      return res.status(404).json({ mensagem: "Carro não encontrado!" });
    }
    return res.json(carro);
  } catch (error) {
    return res
      .status(500)
      .json({ mensagem: "Erro interno do servidor detalhar carro" });
  }
};

const carrosDisponiveis = async (_: Request, res: Response) => {
  try {
    const carros = await knex("carros").where("disponivel", true);
    return res.json(carros);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ mensagem: "Erro interno do servidor de carro disponíveis" });
  }
};

const carrosAlugados = async (_: Request, res: Response) => {
  try {
    const carros = await knex("carros").where("disponivel", false);
    return res.json(carros);
  } catch {
    return res
      .status(500)
      .json({ mensagem: "Erro interno do servidor em carros alugados" });
  }
};

export { listaCarros, detalharCarro, carrosDisponiveis, carrosAlugados };
