import { Request, Response } from "express";
import { knex } from "../../bd/conexao";
import { Alugar, Carro } from "../../utils/tipos";

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

const alugarCarro = async (req: Request, res: Response) => {
  const { carro_id, retirada, devolucao } = req.body;
  try {
    const carro = await knex<Carro>("carros")
      .where({ id: Number(carro_id) })
      .first();
    if (!carro) {
      return res.status(404).json({ mensagem: "Carro não encontrado" });
    }

    const reservado = await knex<Omit<Alugar, "id">>("alugados")
      .insert({ carro_id, retirada, devolucao })
      .returning("*");

    await knex<Carro>("carros")
      .where({ id: Number(carro_id) })
      .update({ disponivel: false });
    return res.status(201).json(reservado[0]);
  } catch {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

export { cadastrarCarro, alugarCarro };
