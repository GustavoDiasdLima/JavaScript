/* Manipular datas*/

let data = new Date(); //criar uma nova data.
console.log(data);

let ano = data.getFullYear(); //pegar o ano completo anual com 4 digitos.
console.log(ano);

let mes = data.getMonth(); //pegar o mês - de 0 até 11 senho 0 janeiro e 11 dezembro...
console.log(mes);

const mesesDoAno = ["Janeiro", "Fevereiro", "Março",
     "Abril", "Maio", "junho",
    "Julho", "Agosto", "Setembro", 
    "Outubro", "Novembro", "Dezembro"];

let mesEscrito = mesesDoAno[data.getMonth()]; //Mostrar o mês no formato escrito.
console.log(mesEscrito);

let diaMes = data.getDate();//pegar o dia do mês - 1 até 31
console.log(diaMes);

let diaSemana = data.getDay(); //pegar o dia da semana - 0 até 6, 0 é domingo ...
console.log(diaSemana);

const diasDaSemana = ["Domingo", "Segunda", "Terça",
    "Quarta", "Quinta", "Sexta", "Sábado"
];
let diaSemanaEscrito = diasDaSemana[data.getDay()]; //mostra o dia da semana escrito.
console.log(diaSemanaEscrito)

let hora = data.getHours(); //pegar as horas - 0 até 23.
console.log(hora);

let minutos = data.getMinutes(); //pegar os minutos- 0 até 59.
console.log(minutos);

let segundos = data.getSeconds(); //pegar os segundos - 0 até 59.
console.log(segundos);

let milissegundos = data.getMilliseconds(); //pegar as horas - 0 até 999.
console.log(milissegundos);

let dataBR = data.toLocaleString('pt-BR', );//pegar a data no padrao brasileiro - dia. mês. ano
console.log(dataBR);

//pegar os valores separados.
d = new Date();
diaMes = d.getDate();
mes = d.getMonth();
ano = d.getFullYear();

//comparar datas- maior ou  menor : ex vencimentos.

var hoje = new Date();
var vencimento = new Date(2026, 3, 15); //ano, mês, dia.

if (hoje > vencimento){
    console.log("Sua conta está vencida!");
}else{
    console.log("Ainda não venceu, tudo certo!");
}

//diferença entre 2 datas em dias.
var dataInicial = new Date();
var dataFinal = new Date(2026, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime(); //dif em millissegundos

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000)); //cálculo de conversâo de milésimos para dias

console.log(diferencaDias);
