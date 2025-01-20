import { IUser } from "../interfaces/User.interface";

export const UserDataBase: IUser[] = [];
// construção de banco de dados 

let id = 0;

export const IdGenerator = () => {
  id++;
  return id;
};
// funçao de gerar ids para users  



// para criarmos uma api, precisaremos de uma boa estrutura de crud para manter o codigo limpo e de bom uso


// passo a passo:
// 1°- tripla estrutura: interface/ banco de dados / serviços

// essa estrutura consiste em criar os principais elementos de todo banco de dados. a interface é responsaveis por tipar os modelos de dados que cara chave vau receber em seus espaços de armazenamento. o banco de dados vai ficar responsaveis por armazenar cada uma das informações coletadas. os serviços são a parte reszponsavel por gerir toda a parte do crud,( create/read/update/delete )




// 2°-  controles (controllers)

// essa etapa é responsavel por criar e organizar cada função de cada rota que sera criada em nosso sistema de api

// 3° - rotas de requisições  (routers): 
// essa etapa é responsavel por criar as rotas de requisições que sera utilizada para fazer os cadastros e verificações de sistema dentro do banco de dados da propria api ]


// 4° verificações de requisições (middlewares) : 

// os middlewares são resçonsaveis por criar as verificações de cadastramento de usuário e novas entradas de arquivos de dados do users 

// 0° app.ts :

// essa parte ficar organizavel dentro do modelo que é baixado junto com as ferramentas instalados no pacote express