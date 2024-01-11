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
