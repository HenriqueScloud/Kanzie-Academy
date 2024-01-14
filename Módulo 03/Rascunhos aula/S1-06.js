let carro = {
    marca: 'honda',
    modelo: 'civic',
    ano: 2018,
    cor: 'preto',
    userName:'pedro',
    passWord:'1234',
}


function alterName(newName){
    carro.userName= newName;
}
function alterPass(newPass){
    carro.passWord= newPass;
}

//alterPass('4321');

function logIn({userName, passWord}){
    if (carro.userName == userName && passWord == carro.passWord){
        console.log('logou!!');
    }
    else{
        console.log('erro de login!usuario invalido');
    } 
}


const userAcess = {
    userName: 'pedro',
    passWord: '1234',
};

logIn(userAcess)