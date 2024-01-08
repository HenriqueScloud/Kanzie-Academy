function renderUpToTwenty(){
    for(let contador =0; contador <= 10; contador++){
        console.log(contador)
    }
}

function tenInTenToAHundred(){
    for(let contador = 0; contador<=100; contador+=10){
        console.log(contador)
    }
}

function oddUpToTwenty(){
    for(let numero=0;numero<=20;numero++){
        if (numero % 2 != 0){
            console.log(`El número ${numero} es impar`)
    }
    }
}
function EvenUpToTwenty(){
    for(let numero=0;numero<=20;numero++){
        if (numero % 2 == 0){
            console.log(`El número ${numero} es par`)
    }
    }
}

function fromNegativeToPositive(){
    for(let contador =-10; contador <= 0; contador++){
        console.log(contador)
    }
}

function inDescendingDirection(){
    for(let contador =10; contador >= 0; contador--){
        console.log(contador)
    }
}

function toSquare(){
    for(let contador=0;contador<=10;contador++){
        console.log(contador *contador)
    }
}