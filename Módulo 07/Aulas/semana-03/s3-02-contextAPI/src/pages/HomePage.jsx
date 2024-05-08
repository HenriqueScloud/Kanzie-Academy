import { useContext } from "react"
import { TodoContext } from "../providers/todoContaxt"

export const  HomePage = () =>{

  const { count, setCount } = useContext(TodoContext)


    return (
      <>
        <h1>Home Page</h1>
        <p>contador: {count}</p>
        <button onClick={() => setCount(count + 1)}>adicionar +1</button>
        <button onClick={() => setCount(count - 1)}>remover -1</button>
      </>
    );
}