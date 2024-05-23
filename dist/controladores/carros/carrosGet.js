"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carrosAlugados = exports.carrosDisponiveis = exports.detalharCarro = exports.listaCarros = void 0;
const conexao_1 = require("../../bd/conexao");
const listaCarros = async (_, res) => {
    try {
        const carros = await (0, conexao_1.knex)("carros");
        return res.json(carros);
    }
    catch (_a) {
        return res
            .status(500)
            .json({ mensagem: "Erro interno do servidor em listar carros" });
    }
};
exports.listaCarros = listaCarros;
const detalharCarro = async (req, res) => {
    const { id } = req.params;
    try {
        const carro = await (0, conexao_1.knex)("carros")
            .where({ id: Number(id) })
            .first();
        if (!carro) {
            return res.status(404).json({ mensagem: "Carro não encontrado!" });
        }
        return res.json(carro);
    }
    catch (error) {
        return res
            .status(500)
            .json({ mensagem: "Erro interno do servidor detalhar carro" });
    }
};
exports.detalharCarro = detalharCarro;
const carrosDisponiveis = async (_, res) => {
    try {
        const carros = await (0, conexao_1.knex)("carros").where("disponivel", true);
        return res.json(carros);
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ mensagem: "Erro interno do servidor de carro disponíveis" });
    }
};
exports.carrosDisponiveis = carrosDisponiveis;
const carrosAlugados = async (_, res) => {
    try {
        const carros = await (0, conexao_1.knex)("carros").where("disponivel", false);
        return res.json(carros);
    }
    catch (_a) {
        return res
            .status(500)
            .json({ mensagem: "Erro interno do servidor em carros alugados" });
    }
};
exports.carrosAlugados = carrosAlugados;
