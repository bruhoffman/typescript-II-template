/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

enum COR {
  VERMELHO = "vermelho",
  ROSA = "rosa",
  AMARELO = "amarelo",
  VERDE = "verde",
  AZUL = "azul",
  VIOLETA = "violeta"
}

type TPessoa = {
  nome: string,
  idade: number | string,
  corFavorita: COR
}

const pessoa1: TPessoa = {
  nome: "Ana",
  idade: 20,
  corFavorita: COR.VERMELHO
}

const pessoa2: TPessoa = {
  nome: "Beatriz",
  idade: 22,
  corFavorita: COR.AMARELO
}

const pessoa3: TPessoa = {
  nome: "Carla",
  idade: 21,
  corFavorita: COR.ROSA
}

const pessoas = [pessoa1, pessoa2, pessoa3]

console.table(pessoas)