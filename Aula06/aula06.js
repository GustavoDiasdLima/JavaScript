/* Operadores
São usados para atribuit valores, comparar valores, executar operações aritméticas etc.

São os sinais: + - * / = ++ -- +- -= && etc...

Operadores Aritméticos(matemáticos): +, -, *, /
Operadores de Atribuição : =, +=, -+
Operadores de Sequência : + usado com strings
Operadores de Comparação : == , ===, !=, !==, <, >, >=, =<
Operador Condicional (Ternário)
Operadores Lógicos: quando precisa fazer mais de 1 condição
*/
var valor1, valor2, total;
valor1 = 5;
valor2 = 2;
total = valor1 + valor2 //Operador aritmético +/ operador de atribuição 
alert(total);
//================================
total = ++valor1; //Incremento (++) soma + 1
alert(total);      
alert("O valor1 ficou: " + valor1);
//Decremento: oposto do incremento (--)
valor1 += valor2; //+= -= atalho caso precise somar a mesma variável
//===============================
//quando usa o sinal de + com palavras ele se torna operador de sequência.
// == comparar valores e retorna true ou false
var valor1, valor2, total;
valor1 = 8;
valor2 = "8";
total = (valor1 == valor2); //retorna True para o valor
total = (valor1 === valor2); //Retorna False para o tipo
//!=: Diferente, retorna true ou false
//!==: verifica o valor e o tipo, retorna true ou false
//===================================
var idade, eleitor, resultado;
idade = 18;
eleitor = (idade < 18) ? "Não, Eleitor" : "Sim, Eleitor"; //Condicional ternário.

alert("A resposta é: " + eleitor + "a idade dele é de : " + idade);
//&& : 'e'
resultado = (idade > 60 && idade < 70); //true - false

alert(resultado); //retorna false 

// Ou = ||
//Negação : resultado = !(idade === 60);