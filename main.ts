// ########################~Primeira Tarefa~########################
// Variáveis que entregam os valores para Arrow Function
let altura: number = 2
let base: number = 7

// Arrow Function que retorna a área
const Area = (altura: number, base: number): number => altura * base

// Mostrando o resultado da conta
console.log(Area(altura, base))

// ########################~Segunda Tarefa~########################
// Variáveis que entregam os nomes para Arrow Function
let nome: string = 'Matheus'
let sobrenome: string = 'Reichemback Stang'

// Arrow Function que retorna a cumprimento
const dizOi = (nomeDaPessoa: string, sobrenomeDaPessoa: string): string => `Olá ${nomeDaPessoa} ${sobrenomeDaPessoa}`

// Mostrando o resultado da Arrow Function
console.log(dizOi(nome, sobrenome))