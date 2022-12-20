let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');
//caracteres possíveis na geração da senha
let charset = "qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM7894561230"
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove('hide');
    password.innerHTML = pass;
    novaSenha = pass
}
//Alterei a ordem do alert do projeto original pois gerava um erro de promises
function copyPassword() {
    navigator.clipboard.writeText(novaSenha);
    alert("Senha copiada com sucesso!");
}