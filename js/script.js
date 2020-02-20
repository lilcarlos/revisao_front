let inputCPF = document.getElementById("cpfUsuario");
let inputSenha = document.getElementById("senhaUsuario");
let inputConfirmacao = document.getElementById("confirmarSenha");
let inputCEP = document.getElementById("cep");
let inputNumeroCartao = document.getElementById("cartao");
let cvv = document.getElementById("cvv");
let cpfTitular = document.getElementById("cpfTitular");
let testando = document.getElementById("divteste");
let final = document.getElementById("finalizar")
let endereco = document.getElementById("endereco")
let bairro = document.getElementById("bairro")
let cidade = document.getElementById("cidade")
let selectEstado = document.getElementById("estado")





inputCPF.addEventListener("keyup", () => {

    if(isNaN(inputCPF.value)){
        inputCPF.value = inputCPF.value.substring(0,(inputCPF.value.length -1))
    }
    if (inputCPF.value.length > 11) {
        inputCPF.value = inputCPF.value.substring(0,11)
    }
})


function buscarCep(cep){
    alert('Vou buscar o cep: ' + cep);
}




var senha;

inputSenha.addEventListener("keyup", () => {
    
    senha = inputSenha.value

})


inputConfirmacao.addEventListener("keyup", () => {
    if (inputConfirmacao.value != senha){
        inputConfirmacao.style.border = "2px solid red";
    } else {
        inputConfirmacao.style.border = "2px solid green";
    }
})

inputCEP.addEventListener("keyup", () => {

    if(isNaN(inputCEP.value)){
        inputCEP.value = inputCEP.value.substring(0,(inputCEP.value.length -1))
    }
    if (inputCEP.value.length >= 8) {
        inputCEP.value = inputCEP.value.substring(0,8)
        
        
        fetch(`https://viacep.com.br/ws/${inputCEP.value}/json/`)
        .then((resposta) => {
            return (resposta.json())
            
        })
        .then((json) => {
            if (json.erro) {
                cep.style.border = "2px solid red"
            } else {
                cep.style.border = "2px solid green"
                endereco.value = json.logradouro
                bairro.value = json.bairro
                cidade.value = json.localidade
                selectEstado.value = json.uf

            }
            
        })
    }
})



inputNumeroCartao.addEventListener("keyup", () => {
    if(isNaN(inputNumeroCartao.value)){
        inputNumeroCartao.value = inputNumeroCartao.value.substring(0,(inputNumeroCartao.value.length -1))
    }
    if (inputNumeroCartao.value.length > 16) {
        inputNumeroCartao.value = inputNumeroCartao.value.substring(0,(inputNumeroCartao.value.length -1))
    }
})

cvv.addEventListener("keyup", () => {
    if(isNaN(cvv.value)){
        cvv.value = cvv.value.substring(0,(cvv.value.length -1))
    }
    if (cvv.value.length > 3) {
        cvv.value = cvv.value.substring(0,(cvv.value.length -1))
    }
})

cpfTitular.addEventListener("keyup" , () => {
    if(isNaN(cpfTitular.value)){
        cpfTitular.value = cpfTitular.value.substring(0,(cpfTitular.value.length -1))
    }
    if (cpfTitular.value.length > 11) {
        cpfTitular.value = cpfTitular.value.substring(0,(cpfTitular.value.length -1))
    }
})





