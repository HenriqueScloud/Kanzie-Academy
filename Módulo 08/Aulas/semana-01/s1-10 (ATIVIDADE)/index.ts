interface IModule {
  name: string;
  skills: string[];
}

interface User {
  id: number;
  name: string;
  email: string;
  module: IModule;
}

export const USER: User = {
  id: 1,
  name: "henrique S",
  email: "henriqueS@gmial.com",
  module: { name: "modulo 1", skills: [
    'falar',
    'agir',
    'fazer'
  ]},
};


console.log(USER.module.skills.forEach(item=>console.log(item)));


// criando um usuario valido para apis 