let nome = window.prompt('Qual é o seu nome?');
document.write(`Olá, <strong>${nome}</strong>, seu nome tem <strong>${nome.length}</strong> letras.<br>`)
document.write(`Seu nome em maiúsculo é ${nome.toUpperCase()}<br>`)
document.write(`Seu nome em minúsculo é ${nome.toLowerCase()}<br>`)

let boxPreço = window.prompt('Qual é o preço do seu terno?');
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
media >= 7 ?'Aprovado' :'Reprovado'