
// Faça um programa que peça um valor entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido
function addValue(){
    let num = prompt('Digite um numero de 0 a 10:')
    while(num <0 || num >10 || num == null || num == ''){
        alert ('numero invalido ! coloque um numero entre 0 a 10')
        num = prompt('Digite um numero de 0 a 10:')
    }
    alert(`o numero que você digitou foi o ${num}`) 
}
// addValue();


// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações

function addLogin(){
    let usuario = prompt('Digite seu nome:')
    let senha = prompt('Digite sua senha:')
    while ( senha == usuario || senha.length < 8){
        alert("Sua senha não pode ser igual ao seu nome de usuário e tem que ter 8 ou mais caracteres !!")
        senha = prompt('Digite sua senha:')
    }
    alert('cadastro concluido !')
}
// addLogin();


// Faça um programa que enquanto a entrada for números inteiros positivos, menores que 10, continue somando. Quando um valor negativo ou maior que 10 for informado, pare a execução, alerte a soma e a média.

function enterNumbers(){
    let soma=0
    let media=0
    let num = Number(prompt('digite um numero entre 0 e 10 para somar:'))
    while (num >= 0 && num <= 10 && num != null){
        soma = soma + num;
        media+=1
        num=Number(prompt(`total: ${soma} digite mais um número para a somar:`))
    }
    alert(`a soma dos números que você digitou é igual a ${soma} e a média dos numeros é ${soma/media}`) 
}
// enterNumbers()


function ContagemDosVotos(){
    let cand1 = 0
    let cand2 = 0
    let cand3 = 0
    let voto = 0
    let resposta = prompt('vc quer votar:')
    while(resposta == 's'){
        voto = prompt('em qual candidato você esta votando ?')
        if (voto=='1') {
            cand1++
            alert('voto registrado com sucesso !')
        }
        else if (voto=='2'){
            cand2++
            alert('voto registrado com sucesso !')
        }
        else if(voto=='3') {
            cand3++
            alert('voto registrado com sucesso !')
        }
        else {
            alert('candidato não encontrado !') 
        }
        resposta = prompt('quer continuar votando (s/n):')
    }
        
    alert( `o candidato 1: ${cand1}; o candidato 2: ${cand2}; o candidato 3: ${cand3}`)
}
ContagemDosVotos()
