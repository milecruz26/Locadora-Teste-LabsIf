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

rotas.post("/carros", cadastrarCarro);

rotas.get("/carros/:id", detalharCarro);

rotas.put("/carros/:id", atualizarCarro);

rotas.delete("/carros/:id", deletarCarro);

// [GET] /carros/disponiveis : Listar carros disponíveis, essa operação deve retornar uma lista de todos os carros que estão disponíveis para aluguel.
rotas.get("/carros/disponiveis", carrosDisponiveis);

// [POST] /carros/alugar : Alugar um carro, deve permitir que um usuário alugue um carro, fornecendo o ID do carro, a data e hora de início do aluguel e a data e hora de fim do aluguel.
rotas.post("/carros/alugar", alugarCarro);

// [GET] /carros/alugados :Listar carros alugados, essa operação deve retornar uma lista de todos os carros que estão alugados.
rotas.get("/carros/alugados", carrosAlugados);

export default rotas;
