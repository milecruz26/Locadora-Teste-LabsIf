"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletarCarro = void 0;
const conexao_1 = require("../../bd/conexao");
const deletarCarro = async (req, res) => {
    const { id } = req.params;
    try {
        const carro = await (0, conexao_1.knex)("carros")
            .where({ id: Number(id) })
            .first();
        if (!carro) {
            return res.status(404).json({ mensagem: "Carro não encontrado!" });
        }
        await (0, conexao_1.knex)("carros")
            .where({ id: Number(id) })
            .del();
        return res.status(204).send();
    }
    catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
};
exports.deletarCarro = deletarCarro;
