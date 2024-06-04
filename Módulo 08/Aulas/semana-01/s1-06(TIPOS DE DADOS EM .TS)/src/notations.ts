 // NOTATIONS ( tipagens relacionadas aos parametros e retornos das funções !)

function sum1(a:number) {

  return a ** 2

}

sum1(2)


const sum = (a:number): number => {
  return a **2
}


// uma função que nao tem retorno é chamada de void e indentificada pela linguagem 


const sub = (a: number):void => {
  console.log(a - 1);
}

sub(2)