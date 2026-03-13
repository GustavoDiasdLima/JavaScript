//=============for
/*laços oferecem um jeito fácil e rápido de executar uma ação repetidas vezes.*/

for(let i=0; i <10001; i++) { //laço começa em 0, se 0 for menor que 10001, vai acresc +1...
    document.getElementById("teste").innerHTML += i +", ";

}


const carros = ["Gol", "Fusca", "Brasília", "Del Rey", "Corolla"];

var tamanho = carros.length;

for (let i = 0; i < tamanho; i++) {
    document.getElementById("teste").innerHTML += carros[i] + " - "; 
    console.log("teste");
}
