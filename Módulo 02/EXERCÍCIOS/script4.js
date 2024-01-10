function AddStringArray(str){
    let arr = [];
    if(str.length >= 5){
        arr.push(str)
    }
    return arr
}
function getNameFromArrayPosition(num){
    let arr2 =['Hermanoteu', 'Olonéia','Migalatéia','Godart']

    if (num >=0 && num<arr2.length){
        return arr2[num]
    }
    return 'valor não encontrado !'
}
function verifyParImpar(num){
    let arr3 = [1,2,3,4,5,6,7,8,9,10]
    if (arr3[num]%2==0){
        return `${arr3[num]} é par`
    }
    return `${arr3[num]} é impar`
}
