import { Request, Response } from "express";

// [POST] /carros :Criar um carro, deve permitir que um usuário crie um novo carro, fornecendo as informações básicas, como modelo, marca, descrição, preço de aluguel e categoria.
const cadastrarCarro = async (req: Request, res: Response) => {};

// [POST] /carros/alugar : Alugar um carro, deve permitir que um usuário alugue um carro, fornecendo o ID do carro, a data e hora de início do aluguel e a data e hora de fim do aluguel.
const alugarCarro = async (req: Request, res: Response) => {};

export { cadastrarCarro, alugarCarro };
