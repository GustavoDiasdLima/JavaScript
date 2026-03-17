/* JSON

Json significa JavaScript Object Notation , é basicamente uma formar de converter um objeto em texto e vise-versa
usado para transmitir dados entre sistemas de forma simples
no JS usamos 2 métodos
JSON.parse(): converte texto no padrão JSON em objetos
JSON.stringify(): converse objetos em texto padrão JSON*/



function buscarCEP(){
    let input = document.getElementById('cep').value;
    
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function () {
        document.getElementById('texto').innerHTML = this.responseText;

        let obj = JSON.parse(this.responseText);

        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;

        document.getElementById('texto').innerHTML = "Logradouro:" +logradouro+
        "<br> Cidade: "+cidade+"<br> Estado:"+uf;
    }
}




const carro = { //objeto carro
    marca: "Fiat",
    modelo: "Uno",
    motor: ["1.6", "1.4", "1.0"]
}

let texto = JSON.stringify(carro);

document.getElementById('area').innerHTML = texto; //Mostra JSON no HTML
let obj = JSON.parse(texto); //Converte de volta para obj
console.log(obj.motor[2]); //pega o valor desse obj