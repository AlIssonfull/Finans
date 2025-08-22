document.addEventListener("DOMContentLoaded", function () {
    const botaoMenu = document.querySelector('.menu'); 

    botaoMenu.addEventListener('click', apertou);
});

function apertou(){
    const menu = document.getElementById('lista');
    const menuIcon = document.querySelector('.menu span'); 
    const itens = menu.querySelector('.itens'); 

    if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block"; 
    menuIcon.textContent = "close"; 
    itens.classList.add('show');
  } else {
    menu.style.display = "none";
    menuIcon.textContent = "menu";
    itens.classList.remove('show');
  }
}