function quadradoDoNumero(){
    for(let contador = 15;contador <=20; contador++){
        console.log(`O quadrado de ${contador} é ${contador*contador}`)
    }
}
function SomaDosNumerosNaturais(){
    let soma=0;
    for(let contador=0;contador<=100;contador++){
        soma+=contador;
        console.log(soma)
    }
}
function MenoresEpares(){
    for(let num = 0;num <= 200;num++){
        if(num%4==0){
            console.log(`${num} é divisivel por 4 e menor que 200`);
        }
    }
}
function SomaDosNumeros50e70(){
    let soma=0;
    let qtd=0;
    for(let contador=50;contador<=70;contador++){
        
        if (contador %2==0){
            qtd = qtd + 1;
            soma+=contador;
        }
    }
    const mediaAritimetica = soma /qtd
    console.log(`a media é ${mediaAritimetica} e soma dos numeros pares entre 50 e 70 da o totalde ${soma}`)

}