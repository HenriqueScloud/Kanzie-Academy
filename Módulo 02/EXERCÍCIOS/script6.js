function verticalText(text){
    for(let i =0 ; i < text.length ; i++ ){
        console.log(`${text[i]}`);
    }
}
function incrementText(text){
    let incremento = "";
    for (let i=0; i<text.length; i++){
        incremento+= text[i]
        console.log(incremento)
    }
}
function incrementTextBackWards(text){
    let result = '';
    for (let i = text.length -1; i>= 0; i--){
        result = text[i] + result
        console.log(result);
    }
}
function padEnd(palavra, num, incremento){
    let result = palavra;
    for (let i = 0; i<num;i++){
        result += incremento;
    }
    return result
}
function subString(text, inicial, final){
    let result ='';
    for (let i = inicial+1;i<final;i++){
        if(i > inicial && i<final){
            result += text[i];
        }
    }
    return result
}
function strRepiter(frase,num){
    let result ='';
    for (let i = 0 ; i < num; i++) {
        result += frase;
        result+= ' ';
    }
    return result
}
function stringCentralizer(palavra,num,element){
    let result =` ${palavra} `;
    for(let i=0;i<num;i++){
        result = element + result + element
    }
    return result
}