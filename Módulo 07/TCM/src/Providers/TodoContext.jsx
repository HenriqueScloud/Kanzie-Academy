import { createContext, useState } from "react";

export const TodoContext = createContext({})

// eslint-disable-next-line react/prop-types
export const TodoProvider = ({children})=>{
  //criando os elementos globais 

  const [user,setUser]= useState(null)

  return (
    <TodoContext.Provider value={(user,setUser)}>
      {children}
    </TodoContext.Provider>
  );
}
