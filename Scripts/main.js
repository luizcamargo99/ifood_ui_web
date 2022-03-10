function toggleMenu () {
   tratarMenu();
   tratarLinhas();
}

function tratarMenu () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

function tratarLinhas () {
    const linhas = document.getElementsByClassName('linha');  
    for (let index = 0; index < linhas.length; index++) {
        linhas[index].classList.toggle('active');    
    }
}