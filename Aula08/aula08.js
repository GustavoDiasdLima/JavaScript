//==============Objetos
/* São variáveis com muitos valores dentro.
ex: const carro = {marca: "ford", modelo: "ka", ano: 2015}
os valores dentro de um objeto são chamados de propriedades
objetos também podem ter métodos. Um método é uma função colocado dentro de uma propriedade*/

const carro = {
    marca: "ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-1234",
    buzina: function() {alert("BIIII")},//método quando tem uma propriedade que tem uma função dentro dela.
    completo: function() {
        return "A marca é " +this.marca+" e o modelo é: "+this.modelo; //concatenar
}
}
//console.log(carro);
//console.log(carro.ano); //se quiser uma propriedade específica
//console.log(carro["placa"]);
//carro.buzina(); //se quiser chamar o método buzina 
console.log(carro.completo());