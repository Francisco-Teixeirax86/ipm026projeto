document.getElementById("adicionar-botao").addEventListener('click',adicionarIngrediente);
document.getElementById("adicionar-botao").addEventListener('click',faltaIngrediente);

function adicionarIngrediente(){
    var node = document.createElement('li');
    var content = document.getElementById("conteudo").value;
    node.appendChild(document.createTextNode(content));
     
    document.getElementById("lista-ingredientes").appendChild(node);
}

function faltaIngrediente(){
    if(document.getElementById("conteudo").value == "mozarela"){
        alert("Este ingrediente está em falta no seu frigorifico");
    }
}