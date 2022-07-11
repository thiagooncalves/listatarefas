function Filtrar() {
  let inputFilter;
  inputFilter = document.getElementById("filtro-tarefas");
  filter = inputFilter.value.toUpperCase();
  if (filter.length >= 1 && filter.length <= 3 ) return
  let tarefasFiltradas = tarefas.filter(function(obj){ return (obj.titulo.toUpperCase().indexOf(filter) > -1 || obj.descricao.toUpperCase().indexOf(filter) > -1); });
  renderizaTabela(tarefasFiltradas);
}

let nome = prompt('Qual é o seu nome?');
document.write(`Olá, <strong>${nome}</strong>, seu nome tem <strong>${nome.length}</strong> letras.<br>`)
document.write(`Seu nome em maiúsculo é ${nome.toUpperCase()}<br>`)
document.write(`Seu nome em minúsculo é ${nome.toLowerCase()}<br>`)

let boxPreço = prompt('Qual é o preço do seu terno?');
let inputPreço = 1999
let moeda = inputPreço.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
document.write(`O preço do seu terno é: ${moeda}`);

5 == '5' || 5 == 5 // true, pois verifica apenas o valor
5 === '5'         // false, pois verifica o valor e o tipo (string nesse caso)
5 === 5          // true

idade >= 18 && altura >= 1.50 // a idade é maior ou igual a 18 e a altura é maior ou igual a 1.50?
salario >= 3000 || sexo != 'M' // o salário é maior ou igual a 3000 ou o sexo é diferente de masculino?
estado == 'MG' || estado == 'SC' // o estado é MG ou o estado é SC?

let media = 7
media >= 7 ?'Aprovado' :'Reprovado' // o resultado será 'aprovado'.

let idade = 27
let thiago = idade == 27 ?'1995' :'Error' // o resultado será '1995'.