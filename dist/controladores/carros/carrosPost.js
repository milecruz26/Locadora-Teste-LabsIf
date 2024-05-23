"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alugarCarro = exports.cadastrarCarro = void 0;
const conexao_1 = require("../../bd/conexao");
const cadastrarCarro = async (req, res) => {
    const { modelo, marca, descricao, valor, categoria, disponivel } = req.body;
    try {
        const carro = await (0, conexao_1.knex)("carros")
            .insert({ modelo, marca, descricao, valor, categoria, disponivel })
            .returning("*");
        return res.status(201).json(carro[0]);
    }
    catch (_a) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
};
exports.cadastrarCarro = cadastrarCarro;
const alugarCarro = async (req, res) => {
    const { carro_id, retirada, devolucao } = req.body;
    try {
        const carro = await (0, conexao_1.knex)("carros")
            .where({ id: Number(carro_id) })
            .first();
        if (!carro) {
            return res.status(404).json({ mensagem: "Carro não encontrado" });
        }
        const reservado = await (0, conexao_1.knex)("alugados")
            .insert({ carro_id, retirada, devolucao })
            .returning("*");
        await (0, conexao_1.knex)("carros")
            .where({ id: Number(carro_id) })
            .update({ disponivel: false });
        return res.status(201).json(reservado[0]);
    }
    catch (_a) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
};
exports.alugarCarro = alugarCarro;
