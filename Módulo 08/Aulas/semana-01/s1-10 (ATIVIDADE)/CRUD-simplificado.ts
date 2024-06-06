// console.log("ola mundo !");


const nameList: Array<string> = [];

// função de criação dos item do arry ( C - CREATE ) 
const addNames = (name: string) => {
  nameList.push(name);
};

// função de leitura dos itens do array ( R - READ )
const getNames = () => {
  nameList.forEach((item) => console.log(item));
}

// função de atualização dos dados do array ( U - UPDATE )
const updateNames = (index: number, name: string ) => {
  nameList.splice(index,1, name)
}

//função de exclusão dos item do array ( D- DELETE  )
const delNames = (i: number) => {
  nameList.splice(i, 1)
}



// EXECUÇÃO DAS REQUISIÇÕES DO FRONT 
addNames('henrique')
addNames("luiza");
addNames("elena");
delNames(2)
updateNames(2,'julio')
getNames()