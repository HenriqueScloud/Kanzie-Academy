const btnMenu = document.querySelector('button')
const btnX = document.querySelector('ul p')

function ativarMenu(){
    const ulMenu = document.querySelector('ul')
    ulMenu.classList.toggle('ativo')

}

btnMenu.addEventListener('click', ativarMenu)
btnX.addEventListener('click', ativarMenu)