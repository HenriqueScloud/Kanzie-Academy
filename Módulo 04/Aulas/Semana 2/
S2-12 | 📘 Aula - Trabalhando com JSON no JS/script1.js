const dados = '{"nome": "João", "idade": 25, "cidade": "São Paulo"}';
const objeto = JSON.parse(dados);

console.log(objeto); // transformando dados em objetos em javascript 


const obj = {
    nome:'henrique',
    idade: 20,
    cidade: 'rio de janeiro'
}
const Json = JSON.stringify(obj)

console.log(Json.indexOf)