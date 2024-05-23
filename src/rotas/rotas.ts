import { Router } from "express";
import {
  carrosAlugados,
  carrosDisponiveis,
  detalharCarro,
  listaCarros,
} from "../controladores/carros/carrosGet";
import {
  alugarCarro,
  cadastrarCarro,
} from "../controladores/carros/carrosPost";
import { atualizarCarro } from "../controladores/carros/carroPut";
import { deletarCarro } from "../controladores/carros/carroDelete";
const rotas = Router();

rotas.get("/carros", listaCarros);

rotas.post("/carro", cadastrarCarro);

rotas.get("/carro/:id", detalharCarro);

rotas.put("/carro/:id", atualizarCarro);

rotas.delete("/carro/:id", deletarCarro);

rotas.get("/carros/disponiveis", carrosDisponiveis);

rotas.post("/carro/alugar", alugarCarro);

rotas.get("/carros/alugados", carrosAlugados);

export default rotas;
