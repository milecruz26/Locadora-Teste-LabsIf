"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carrosGet_1 = require("../controladores/carros/carrosGet");
const carrosPost_1 = require("../controladores/carros/carrosPost");
const carroPut_1 = require("../controladores/carros/carroPut");
const carroDelete_1 = require("../controladores/carros/carroDelete");
const rotas = (0, express_1.Router)();
rotas.get("/carros", carrosGet_1.listaCarros);
rotas.post("/carro", carrosPost_1.cadastrarCarro);
rotas.get("/carro/:id", carrosGet_1.detalharCarro);
rotas.put("/carro/:id", carroPut_1.atualizarCarro);
rotas.delete("/carro/:id", carroDelete_1.deletarCarro);
rotas.get("/carros/disponiveis", carrosGet_1.carrosDisponiveis);
rotas.post("/carro/alugar", carrosPost_1.alugarCarro);
rotas.get("/carros/alugados", carrosGet_1.carrosAlugados);
exports.default = rotas;