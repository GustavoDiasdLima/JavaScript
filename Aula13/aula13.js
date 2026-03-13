/* Eventos de TEMPO com JS

permitem a execução do código em intervalos de tempo especificados. esses intervalos de tempo são chamados de eventos
de cronometragem.

os dois métodos para usar com JS são:

setTimeout(function, tempo em milisegundos)
executa uma função, depois de esperar um número especificado de milissegundos.

setInterval(function, miliss)
é o mesmo que setTimeout(), mas repete a execução continuamente.
*/

function ativarContagem(){
    document.getElementById("tempo").innerHTML = "Começou a contar!";
    //executa apenas 1 vez após o tempo determinado
    tempo = setTimeout(function(){ 
        document.getElementById("tempo").innerHTML = "Executou o setTimeout!";
    },  5000);
}

function pararContagem() {
    clearTimeout(tempo);
    document.getElementById("tempo").innerHTML = "Parou a contagem!";
}

setInterval(function () {
    var cronometro = document.getElementById('tempo').innerHTML;
    var soma = cronometro + 1;
    document.getElementById("tempo").innerHTML = soma;
    }, 1000);