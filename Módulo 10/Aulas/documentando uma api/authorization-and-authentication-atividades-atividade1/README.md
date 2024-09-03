<!-- rode sua api para usar o insomnia como base das respostas dos seu corpo de requisição que ira voltar e ser enviado à database  -->

# API Autenticação e Autorização

Uma API desenvolvida para praticar conceitos de autorização e autenticação

Rode o comando para migração do banco de dados:

```bash

npm run migrate:dev

```

**Será essencianl ter um banco de dados criado e referenciado nas variáveis de ambiente**

<!-- frase importante em destaque na documentação -->

Rode o comando abaixo para iniciar a aplicação em modo desenvolvedr

```bash
  npm run dev
```

## Rotas da Aplicação

### Registrar usuário /users POST

Padrão de corpo

```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

Padrão de resposta (status 201)

```json
{
  "id": "string",
  "name": "string",
  "email": "string",
}
```

### Login de Usuário /users/login POST

padrão de corpo

```json
{
    "email": "string",
    "password": "string"
}
```

Padrão de resposta (status 200)

```json


{
  "accessToken": "string",
  "user": {
    "id": "string",
    "name": "string",
    "email": "string",
}
}

```

<!-- anote os possiveis erros que podem ser gerados pelas api e suas requisições para que o dev consiga corrigir erros existentes  -->

#### Possíveis erros 

404 NOT FOUND - Usuário não encontrado !
```json
{
    "massege": "string"
}
```



### autoLogin Usuário GET /users (autorização)

Autorização 

```json
{
  "headers":{
    "Authorization": "Bearer token"
  }
}

Padrão de resposta 

```json
{
  "id": "string",
  "name": "string",
  "email": "string",
}
```

### Possiveis erros de autenticação 

401 UNAUTHORIZED - Usuário não autenticado

