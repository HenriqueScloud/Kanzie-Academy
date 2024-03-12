
import { StudentCard } from "./components/secitons/StudentCard/StudentCard";
import { CardsDataBase } from "./data/dataBase";

function App() {

  return (
    <>
      {CardsDataBase.map(({name,age,country},index)=>{
        return (
          // eslint-disable-next-line react/jsx-key
          <StudentCard kay={index}name={name} age={age} country={country} />
        )
      })}


      
    </>
  )
}

export default App
