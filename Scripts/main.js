function toggleMenu() {
    tratarMenu();
    tratarLinhas();
    removerScrollBody();
}

function tratarMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

function tratarLinhas() {
    const linhas = document.getElementsByClassName('linha');
    for (let index = 0; index < linhas.length; index++) {
        linhas[index].classList.toggle('active');
    }
}

function removerScrollBody() {
    const body = document.getElementsByTagName('body');
    body[0].classList.toggle('remover-scroll');
}

// function inCard (tipoCard){
//     const card = document.getElementById(tipoCard == 'restaurante' ? 'mercado-card' : 'restaurante-card');
//     card.classList.add('animation-hover');
// }

// function outCard (tipoCard){
//     const card = document.getElementById(tipoCard == 'restaurante' ? 'mercado-card' : 'restaurante-card');
//     card.classList.remove('animation-hover');
// }