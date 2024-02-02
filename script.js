const conteiner = document.getElementById('conteiner');
const registerBtn = document.getElementById('registrar');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    conteiner.classList.add("ativo");
});

loginBtn.addEventListener('click', () => {
    conteiner.classList.remove("ativo");
});