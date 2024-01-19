const carros = [
    {
        modelo: "Ka",
        marca: "Ford",
        ano: "2000",
        cor: "Branco",
        completo: false,
        acessorios: ['Vidro Elétrico'],
        preco: 6799.33
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: false,
        acessorios: ['Trava'],
        preco: 12199.13
    },
    {
        modelo: "Palio",
        marca: "Fiat",
        ano: "1995",
        cor: "Verde",
        completo: false,
        acessorios: [],
        preco: 11099.1
    },
    {
        modelo: "Monza",
        marca: "Chevrolet",
        ano: "1993",
        cor: "Vinho",
        completo: false,
        acessorios: [],
        preco: 14578.25
    },
    {
        modelo: "Saveiro",
        marca: "VW",
        ano: "2013",
        cor: "Prata",
        completo: false,
        acessorios: [],
        preco: 28399.13
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 14350.45
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "2013",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 22109.21
    },
    {
        modelo: "Montana",
        marca: "Chevrolet",
        ano: "2011",
        cor: "Azul",
        completo: false,
        acessorios: [],
        preco: 15999.13
    },
    {
        modelo: "Stilo",
        marca: "Fiat",
        ano: "2000",
        cor: "Preto",
        completo: false,
        acessorios: [],
        preco: 17251.36
    }
]

function contaTotal(estoque){
    return `O estoque de carros tem o total de ${estoque.length}`
}
function precoTotal(estoque){
    let somatorio = 0;
    for (let i = 0; i < estoque.length; i++){
        somatorio += estoque[i].preco 
        console.log(i)
    }
    return  `O preço total do estoque é  R$${somatorio.toFixed(2).replace('.',',')}`;
}
function filtrarPorMarca(estoque, marcaProcurada){
    const carrosFiltrados = estoque.filter(carro => carro.marca.toLowerCase() === marcaProcurada.toLowerCase());
    return carrosFiltrados;
}


function filtrarPorAcessorio(estoque , acessorio){
    let veiculosPorAcessorio =[];
    for (let i = 0; estoque.length > i;i++){
        for (let j = 0; j < estoque[i].acessorios.length;j++){
            if(estoque[i].acessorios[j] === acessorio){
                veiculosPorAcessorio.push(estoque[i]);
            }
        }
    }
    return veiculosPorAcessorio;
}

//console.log(filtrarPorAcessorio(carros,"Trava"))



function eCarroCompleto(estoque){
    ///let vetorDeCarrosCompletos= [];
    //for(let i = 0; i< estoque.length;i++){
    //    if (estoque[i].completo == true){
    //        vetorDeCarrosCompletos.push(estoque[i])
    //    }
    //}
    //return vetorDeCarrosCompletos



    const vetorDeCarrosCompletos = estoque.filter(carro => carro.completo == true)
    return vetorDeCarrosCompletos;
}
//console.log(eCarroCompleto(carros))


function deleteCarLIst(estoque, indice){   
    if ( indice > estoque.length || indice < 0 ){
        return `valor indefinido`
    }
    console.log(estoque[indice]) 
    estoque[indice] = ''
}
console.log(carros);
deleteCarLIst(carros,2)
console.log(carros);