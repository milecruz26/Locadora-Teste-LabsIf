import { Request, Response } from "express";
import { knex } from "../../bd/conexao";
import { Carro } from "../../utils/tipos";

// [PUT] /carros/{id} : Atualizar um carro, deve permitir que um usuário atualize as informações de um carro existente, fornecendo o ID do carro e as informações a serem atualizadas.
const atualizarCarro = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { modelo, marca, descricao, valor, categoria } = req.body;
  try {
    const carro = await knex<Carro>("carros")
      .where({ id: Number(id) })
      .first();
    if (!carro) {
      return res.status(404).json({ mensagem: "Carro não encontrado!" });
    }

    await knex<Omit<Carro, "disponivel">>("carros")
      .where({ id: Number(id) })
      .update({ modelo, marca, descricao, valor, categoria });

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

export { atualizarCarro };
