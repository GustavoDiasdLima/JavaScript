/* Classes em JS
são como fábricas para criar objetos. são ''funções especiais'' para criação de objetos.

as classes em JS usam método chamado constructor() para fabricar os objetos*/

class Carro{//class palavra para criar classe
    constructor(valor1, valor2, valor3){ //parametros no constructor
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){ //método
        return this.modelo+" buzinou: BIIIIIIIIIIIIII";
    }

} 


const uno = new Carro("Fiat", "Uno", 2001); //printa Carro {marca: 'Fiat', modelo: 'Uno', ano: 2001} no console
const gol = new Carro("Volkswagen", "Gol", 2013);
console.log(uno.buzina());
console.log(gol.buzina());