import { Request, Response } from "express";
import { knex } from "../../bd/conexao";
import { Carro } from "../../utils/tipos";

// [POST] /carros :Criar um carro, deve permitir que um usuário crie um novo carro, fornecendo as informações básicas, como modelo, marca, descrição, preço de aluguel e categoria.
const cadastrarCarro = async (req: Request, res: Response) => {
  const { modelo, marca, descricao, valor, categoria, disponivel } = req.body;
  try {
    const carro = await knex<Omit<Carro, "id">>("carros")
      .insert({ modelo, marca, descricao, valor, categoria, disponivel })
      .returning("*");
    return res.status(201).json(carro[0]);
  } catch {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

// [POST] /carros/alugar : Alugar um carro, deve permitir que um usuário alugue um carro, fornecendo o ID do carro, a data e hora de início do aluguel e a data e hora de fim do aluguel.
const alugarCarro = async (req: Request, res: Response) => {};

export { cadastrarCarro, alugarCarro };
