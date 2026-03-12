//======== If e Else declarações condicionais

var interruptor = "on";

if (interruptor == "on"){
    alert(' A lâmpada está ligada!');
}else{
    alert('A lâmpada está desligada!');
}

var hora = new Date().getHours();
alert(hora);

if (hora < 12){
   alert('Bom dia!');
}else if (hora < 18){
   alert('Boa tarde!');
}else{
   alert('Boa noite!');
}

function verificar(){ //validação do campo input formulário
    let nome = document.getElementById("nome").value;

    if (nome == "" || nome == null){
        let p = document.getElementById("teste")
        p.innerHTML = "O campo não pode ser vazio";
        p.style.color = "red";
    }else{
        let p = document.getElementById("teste")
        p.innerHTML = "Parabéns tudo certinho";
        p.style.color = "green";
}
}
//====================switch
/* usado para realizar diferentes ações com base em diferentes
 condições no mesmo bloco de verificação. caso a condição não seja compatível não 
 será executada e o valor padrão será acionado.*/

function verificaCor(){
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase(); //vai botar minusculo
    
    let x = "0";

function diaDaSemana(){
    var dia = new Date().getDay();

    console.log(dia);


 switch (dia) { //(expressão)
    case 0:
        document.getElementById("teste").innerHTML = "Hoje é Domingo"; //o que acontece
        break;
    case 1:
         document.getElementById("teste").innerHTML = "Hoje é segunda";
        break;
    case 2:
         document.getElementById("teste").innerHTML = "Hoje é terça";
        break;
     case 3:
         document.getElementById("teste").innerHTML = "Hoje é quarta";
        break;
    default:
       document.getElementById("teste").innerHTML = "Não sei que dia é...";
 }
}
}