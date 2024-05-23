"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizarCarro = void 0;
const conexao_1 = require("../../bd/conexao");
const atualizarCarro = async (req, res) => {
    const { id } = req.params;
    const { modelo, marca, descricao, valor, categoria } = req.body;
    try {
        const carro = await (0, conexao_1.knex)("carros")
            .where({ id: Number(id) })
            .first();
        if (!carro) {
            return res.status(404).json({ mensagem: "Carro não encontrado!" });
        }
        await (0, conexao_1.knex)("carros")
            .where({ id: Number(id) })
            .update({ modelo, marca, descricao, valor, categoria });
        return res.status(204).send();
    }
    catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
};
exports.atualizarCarro = atualizarCarro;
