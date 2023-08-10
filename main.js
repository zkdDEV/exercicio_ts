"use strict";
// ########################~Primeira Tarefa~########################
// Variáveis que entregam os valores para Arrow Function
let altura = 2;
let base = 7;
// Arrow Function que retorna a área
const Area = (altura, base) => altura * base;
// Mostrando o resultado da conta
console.log(Area(altura, base));
// ########################~Segunda Tarefa~########################
// Variáveis que entregam os nomes para Arrow Function
let nome = 'Matheus';
let sobrenome = 'Reichemback Stang';
// Arrow Function que retorna a cumprimento
const dizOi = (nomeDaPessoa, sobrenomeDaPessoa) => `Olá ${nomeDaPessoa} ${sobrenomeDaPessoa}`;
// Mostrando o resultado da Arrow Function
console.log(dizOi(nome, sobrenome));
