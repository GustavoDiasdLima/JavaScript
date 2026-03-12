/* Arrays (matrizes )
são usados para armazenas vários valores em uma única variável. Não possuem propriedades e os itens dentro dele sao encontrados pela posição.

Vamos imaginar um array como uma lista de itens, com controle, por ordem de posição dentro dele,

Ex: const lista = ["arroz", "feijão", "macarrão", "leite"];

A lista[0] (lista na posição/índice 0) vai conter o valor "arroz".
A lista[1] (lista na posição/índice 0) vai conter o valor "feijão".

E assim por diante.
*/

                //0        //1       //2        // 3
const lista = ["arroz", "feijão", "macarrão", "leite"];
alert(lista[0]); //mostra "arroz"
let x = lista[3]; //pega o valor "leite" da lista
alert(x);
lista[0] = "Café"; //mudar o valor da matriz
alert(lista[0]);
console.log(lista); //ver todos os elementos da matriz

/*const lista = 
            ["arroz", 
            "feijão", 
            "macarrão", 
            "leite"];
*/
/*const lista[];
lista[0] = "arroz";
lista[1] = "feijão";
lista[2] = "macarrão";
lista[3] = "leite";
*/
//const lista = new Array("arroz", "feijão"...);

const pessoa = ["Gustavo", "Dias", 19, "Aluno"]; //matriz array
//const pessoa = {nome: "Gustavo", sobrenome: "Dias", idade: 19}; //objeto
//pessoa.nome; //objeto
pessoa[0]; //array

alert(pessoa.length); //Saber quantos itens tem dentro da lista pessoa, retorna 3
alert(pessoa[pessoa.length - 1]); //saber o ultimo elemento da lista
pessoa.push("Brasileiro"); //acrescenta no final um novo item

alert(Array.isArray(pessoa)); //se realmente for array retorna true
//========================= métodos para arrays

const animal = ["Vaca", "marrom", 3, "brava"];
animal.pop(); //remove o ultimo elemento da matriz
animal.push("gorda"); //adiciona no final
animal.shift(); // remove o primeiro elemento - os índices são alterados
animal.unshift("forte"); //Adiciona item no inicio - índices alterados
animal.splice(1, 0, "Item adicionado 1", "item adicionado 2"); //pega uma posição -> (qual posição quer q o elemento seja adc , quantos elementos quer q remova) e passa os valores
document.getElementById("teste").innerHTML = animal.join(" - "); //no lugar da vírgula ele troca pelo - entre os itens do array
console.log(animal);

const lista1 = ["arroz", "feijão", "macarrão", "leite"];
const lista2 = ["suco", "refrigerante", "carne"];
const lista3 = ["salgadinho"];

const superLista = lista1.concat(lista2, lista3); //juntar duas ou mais listas, sempre cria uma nova variavel
document.getElementById("teste").innerHTML = superLista;

const jogadores = ["Biro Biro", "Ribamar", "Pelé", "Maradona"] ;//array
const craques = jogadores.slice(2); //"fatiou" mostrou apenas pelé e maradona, pode usar , para mais parametros
document.getElementById("teste").innerHTML = craques;

const jogOrdem = jogadores.sort(); //deixa em ordem alfabética
jogadores.reverse(); //inverte a ordem alfabética
document.getElementById("teste").innerHTML = jogadores;

const numeros = [40, 100, 1, 5, 25, 10]
numeros.sort(function(a,b){return a-b}); //hackzinho para ordernar números usando função que vai comparar a com b e retornar sempre o menor. Para inverter é só fazer b-a

document.getElementById("teste").innerHTML = MaiorNumero(numeros);
function MaiorNumero(array){ //função para pegar o número maior na matriz
    return Math.max.apply(null, array);
}

document.getElementById("teste").innerHTML = MenorNumero(numeros);
function MaiorNumero(array){ //função para pegar o número menor na matriz
    return Math.min.apply(null, array);
}

const maior20 = numeros.filter(filtragem);

function filtragem(value, index, array){ //função para filtrar valores maiores que 20
    return value > 20;
}
document.getElementById("teste").innerHTML = maior20;