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

// [GET] /carros : Listar todos os carros, deve permitir que um usuário liste todos os carros.
rotas.get("/carros", listaCarros);

// [POST] /carros :Criar um carro, deve permitir que um usuário crie um novo carro, fornecendo as informações básicas, como modelo, marca, descrição, preço de aluguel e categoria.
rotas.post("/carros", cadastrarCarro);

// [GET] /carros/{id} : Listar carro, apenas um carro específico, fornecendo o ID do carro.
rotas.get("/carros/:id", detalharCarro);

// [PUT] /carros/{id} : Atualizar um carro, deve permitir que um usuário atualize as informações de um carro existente, fornecendo o ID do carro e as informações a serem atualizadas.
rotas.put("/carros/:id", atualizarCarro);

// [DELETE] /carros/{id}: Excluir um carro, deve permitir que um usuário exclua um carro existente, fornecendo o ID do carro.
rotas.delete("carros/:id", deletarCarro);

// [GET] /carros/disponiveis : Listar carros disponíveis, essa operação deve retornar uma lista de todos os carros que estão disponíveis para aluguel.
rotas.get("/carros/disponiveis", carrosDisponiveis);

// [POST] /carros/alugar : Alugar um carro, deve permitir que um usuário alugue um carro, fornecendo o ID do carro, a data e hora de início do aluguel e a data e hora de fim do aluguel.
rotas.post("/carros/alugar", alugarCarro);

// [GET] /carros/alugados :Listar carros alugados, essa operação deve retornar uma lista de todos os carros que estão alugados.
rotas.get("/carros/alugados", carrosAlugados);

export default rotas;
