import {  createContext, useState } from "react";

export const TodoContext = createContext({})

// eslint-disable-next-line react/prop-types
export const TodoProvider = ({children}) =>{

  // exportações globais 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [count, setCount] = useState(0) 
  // crinado as variaveis de acesso para outros componentes 

  return (
    <TodoContext.Provider value={{count, setCount}}>
      {children}
    </TodoContext.Provider>
  )

} 