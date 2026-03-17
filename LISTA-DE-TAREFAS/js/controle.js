let contador = 0
let input = document.getElementById('inputTarefa');
let btnADD = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa(){
    //Pegar o valor digitado no input
    let valorInput = input.value;

    //se não for vazio, nem nulo, nem indefinido
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){

        ++contador;

        let novoItem = `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="mdi mdi-circle-outline"></i> 
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
            </div>`;
            //adc novo item no main
            main.innerHTML += novoItem;

            //zerar os campinhos
            input.value = "";
            input.focus();
    }

}

function deletar(id){ //deletar tarefa
    var tarefa = document.getElementById(id);
    tarefa.remove();

}

function marcarTarefa(id){ //marcar tarefa
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if(classe =="item"){
        item.classList.add('clicado')

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-circle-outline'); //remove o icone circulo vazio
        icone.classList.add('mdi-check-circle'); //adc icone check verde

        item.parentNode.appendChild(item); //faz ir pro final

    }else{
        item.classList.remove('clicado') //remover 

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-check-circle'); //remove o checkado
        icone.classList.add('mdi-circle-outline'); //volta pro normal

    }
}
input.addEventListener("keyup", function(event){ //quando apessoa tecla o enter ele envia
    if(event.keyCode === 13){ //se teclou enter (13)
        event.preventDefault();
        btnADD.click();
    }
}); 