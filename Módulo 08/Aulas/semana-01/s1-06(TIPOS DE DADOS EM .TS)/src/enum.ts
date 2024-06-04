// aula s1-06 | ENUM 

// o tipo enum é usado para agrupar variáveis de mesmo tipo . elas são semelhantes aos objetos. os valores das chaves devem ser do mesmo tipo !!

enum UserRoles {
  USER = "user",
  EDITOR = "editor",
  ADMIN = "admin",
}

const userType = UserRoles.USER;

// nao é possiveus declarar os mesmos nomes de variáveis entres os arquivos typescript !!!!!!