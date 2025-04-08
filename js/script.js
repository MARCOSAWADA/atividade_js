const forms = document.getElementById("formulario")
// console.log(forms)
var botao_cancelar = document.getElementById("cancel");
function limpou(){
    alert("DADOS INSERIDOS APAGADOS");
}

// var botao_cadastrar = document.getElementById("cadastrar");
// function cadastrou(){
//     alert("DADOS INSERIDOS E CADASTRADO COM SUCESSO!!!")
// }

var campos = [
    "nome", "cpf", "fone", "email", "senha", 
    "endereco", "cep", "cidade", "estado", "profissao",
];

campos.forEach(function(id) {
    const campo = document.getElementById(id);
    campo.addEventListener("mouseover", function() {
        campo.style.backgroundColor = "#BDC3C7";
        campo.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    });
    campo.addEventListener("mouseout", function() {
        campo.style.backgroundColor = "white";
        campo.style.boxShadow = "none";
    });
});


var nome = document.getElementById("nome");
nome.addEventListener('change', function(event){
    if(nome.value.length < 5){ 
        alert("POR FAVOR PREENCHE CORRETAMENTE O SEU NOME")
        nome.style.borderColor = "#f44336";
        nome.style.boxShadow = "0 0 8px rgba(244, 67, 54, 0.7)";
    }else {
        nome.style.borderColor = "#ccc";
    }
})



var senha = document.getElementById("senha");
senha.addEventListener('change', function(event){
    if (senha.value.length < 6) {
        alert("A SENHA DEVE TER NO MÍNIMO 6 CARACTERES");
        senha.style.borderColor = "#f44336";
        senha.style.boxShadow = "0 0 8px rgba(244, 67, 54, 0.7)";
    } else if (senha.value.length > 8) {
        alert("A SENHA DEVE TER NO MÁXIMO 8 CARACTERES");
        senha.style.borderColor = "#f44336";
        senha.style.boxShadow = "0 0 8px rgba(244, 67, 54, 0.7)";
    } else {
        senha.style.borderColor = "#ccc";
    }
});




var cancel = document.getElementById("cancel");

cancel.addEventListener("mouseover", function(event){
    cancel.style.backgroundColor = "#f44336";
    cancel.style.boxShadow = "0 0 8px rgba(244, 67, 54, 0.7)";
} )

cancel.addEventListener("mouseout", function(event){
    cancel.style.backgroundColor = "#e53935";
    cancel.style.boxShadow = "none";
} )


var botao = document.getElementById("botao");

botao.addEventListener("mouseover", function(event){
    botao.style.backgroundColor = "#45a049";
    botao.style.boxShadow = "0 4px 8px rgba(0, 128, 0, 0.6)";
} )

botao.addEventListener("mouseout", function(event){
    botao.style.backgroundColor = "#388e3c";
    botao.style.boxShadow = "none";
} )






const formulario = document.getElementById("formulario");


function validarFormulario(event) {
    
    let campos = [
        "nome", "cpf", "fone", "email", "senha", 
        "endereco", "cep", "cidade", "estado", "profissao"
    ];

    for (let i = 0; i < campos.length; i++) {
        const campo = document.getElementById(campos[i]);
        
        
        if (campo.value === "") {
            alert(`Por favor, preencha o campo ${campo.placeholder}.`);
            campo.style.borderColor = "#f44336"; 
            campo.style.boxShadow = "0 0 8px rgba(244, 67, 54, 0.7)";
            event.preventDefault();
            return false;
        } else {
            
            campo.style.borderColor = "#ccc";
            campo.style.boxShadow = "none";
        }
    }

    
    alert("Todos os campos foram preenchidos corretamente.");
    return true;
}


formulario.addEventListener("submit", validarFormulario);









var nome = document.getElementById("nome");
var cpf = document.getElementById("cpf");
var fone = document.getElementById("fone");
var email = document.getElementById("email");
var endereco = document.getElementById("endereco");
var cep = document.getElementById("cep");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");
var profissao = document.getElementById("profissao");
var senha = document.getElementById("senha");



// console.log( formulario.nome );

console.log(nome);
console.log(cpf);
console.log(fone);
console.log(email);
console.log(endereco);
console.log(cep);
console.log(cidade);
console.log(estado);
console.log(profissao);
console.log(senha);