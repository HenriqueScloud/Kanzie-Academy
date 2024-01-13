function isPalindrome(text){
    text = text.toLowerCase().replaceAll(' ','')
    let palindromo = '';
    for (let i=0;i<text.length;i++){
        palindromo = text[i] + palindromo
    }
    return palindromo === text;
    
}
function arrayMaxMin(arr){
    let max = arr[0];
    let min = arr[0];
    for(let i=1; i < arr.length; i++) {
        if(arr[i] > max){
            max = arr[i];
        }
        else if(arr[i] < min) {
            min = arr[i];
        }
    }
    let novoArray=[min,max]
    return novoArray;
}

// olha como o mundo é 
// sempre que melhoramos vemos como eramos infriores a pessoas que sabiam muito mais que a gente sabe atualmente e futuramente saberemos mais do que muito e menos que poucos 


a vide sempre nos da uma nova oportunidade de mudar nossos habitos mais precisamos aceitar isso em nossas vidas para que possamos realmente evoluir para melhor
e