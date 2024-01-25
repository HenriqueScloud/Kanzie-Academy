function valueForm(){
    const form = document.querySelector("form")
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const nome = document.querySelector('#nome')
        const senha = document.querySelector('#senha')
        const email = document.querySelector('#email')
        console.log(nome.value)
        console.log(email.value)
        console.log(senha.value)
    })
}
valueForm(); // capiturando os valores de dentro do input e do select.