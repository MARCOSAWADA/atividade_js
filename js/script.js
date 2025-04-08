// const formulario = document.getElementById("formulario");
const forms = document.getElementById("formulario")
console.log(forms)
var botao_cancelar = document.getElementById("cancel");
function limpou(){
    alert("DADOS INSERIDOS APAGADOS");
}

var botao_cadastrar = document.getElementById("cadastrar");
function cadastrou(){
    alert("DADOS INSERIDOS E CADASTRADO COM SUCESSO!!!")
}

var campos = [
    "nome", "cpf", "fone", "email", "senha", 
    "endereco", "cep", "cidade", "estado", "profissao"
];

campos.forEach(function(id) {
    var div = document.getElementById(id);
div.addEventListener("mouseover", function(event){
    div.style.backgroundColor = "#7F8C8D";
} )
div.addEventListener("mouseout", function(event){
    div.style.backgroundColor = "white";
} )
})





nome.addEventListener('change', function(event){
    if(nome.value.length > 5){
        alert("FAVOR PREENCHER O SEU NOME COMPLETO")
    }
    else{
        alert("Dados preenchidos corretamente!")
    }
})





var div2 = document.getElementById("cancel");

div2.addEventListener("mouseover", function(event){
    div2.style.backgroundColor = "#e53935";
} )

div2.addEventListener("mouseout", function(event){
    div2.style.backgroundColor = "white";
} )

var div3 = document.getElementById("botao");

div3.addEventListener("mouseover", function(event){
    div3.style.backgroundColor = "#e53935";
} )

div3.addEventListener("mouseout", function(event){
    div3.style.backgroundColor = "#e53935";
} )