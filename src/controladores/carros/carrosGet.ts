import { Request, Response } from "express";
import { knex } from "../../bd/conexao";
import { Carro } from "../../utils/tipos";

// [GET] /carros : Listar todos os carros, deve permitir que um usuário liste todos os carros.
const listaCarros = async (_: Request, res: Response) => {
  try {
    const carros = await knex("carros");
    return res.json(carros);
  } catch {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

// [GET] /carros/{id} : Listar carro, apenas um carro específico, fornecendo o ID do carro.
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
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

// [GET] /carros/disponiveis : Listar carros disponíveis, essa operação deve retornar uma lista de todos os carros que estão disponíveis para aluguel.

const carrosDisponiveis = async (req: Request, res: Response) => {};

// [GET] /carros/alugados :Listar carros alugados, essa operação deve retornar uma lista de todos os carros que estão alugados.
const carrosAlugados = async (req: Request, res: Response) => {};

export { listaCarros, detalharCarro, carrosDisponiveis, carrosAlugados };
