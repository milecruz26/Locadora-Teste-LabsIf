import { Request, Response } from "express";
import { knex } from "../../bd/conexao";
import { Carro } from "../../utils/tipos";
export const deletarCarro = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const carro = await knex<Carro>("carros")
      .where({ id: Number(id) })
      .first();
    if (!carro) {
      return res.status(404).json({ mensagem: "Carro não encontrado!" });
    }

    await knex<Carro>("carros")
      .where({ id: Number(id) })
      .del();

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};
