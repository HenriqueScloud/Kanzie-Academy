import { createContext, useState } from "react";

export const TodoContext = createContext({})

// eslint-disable-next-line react/prop-types
export const TodoProvider = ({children})=>{
  //criando os elementos globais 
  const [todo, setTodo] = useState([])

  return (
    <TodoContext.Provider value={(todo, setTodo)}>
      {children}
    </TodoContext.Provider>
  );
}