export type Carro = {
  id: number;
  modelo: string;
  marca: string;
  descricao: number;
  valor: number;
  categoria: string;
  disponivel: boolean;
};

export type Alugar = {
  id: number;
  carro_id: number;
  retirada: string;
  devolucao: string;
};
