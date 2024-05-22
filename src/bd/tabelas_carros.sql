create table carros(
  id serial primary key,
  modelo text,
  marca text,
  descricao text,
  valor integer,
  categoria text,
  disponivel boolean,
);

create table alugados(
  id serial primary key,  
  carro_id integer references carros(id),
  retirada timestamp,
  devolucao timestamp
);