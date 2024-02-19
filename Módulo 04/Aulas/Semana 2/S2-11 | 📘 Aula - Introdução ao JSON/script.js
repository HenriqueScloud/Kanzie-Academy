const pessoa = {
    "nome": "João",
    "idade": 25,
    "cidade": "São Paulo",
    "interesses": ["música", "culinária"]
}

const listaPessoas = [
    {
        "nome": "João",
        "idade": 25,
        "cidade": "São Paulo",
        "interesses": ["música", "culinária"]
    }, //JSON 1
    {
        "nome": "João",
        "idade": 25,
        "cidade": "São Paulo",
        "interesses": ["música", "culinária"],
        "pessoaMenor": function(nome){
            console.log(nome)
        }
    },  //JSON 2
]

/// Em resumo, enquanto objetos em JavaScript são estruturas de dados flexíveis que podem conter uma variedade de tipos, funções e referências circulares, o JSON é um formato de dados mais restrito usado principalmente para comunicação de dados entre sistemas. JSON é derivado da notação de objetos literais de JavaScript, mas tem limitações para garantir portabilidade e segurança durante a transmissão de dados pela web.///

// JSON são objetos que são declarados em javascript de forma que se parecem com objetos. porem a diferença entre eles em suas sintaxes é apenas que em suas palavras-chaves ele utiliza aspás duplas.

