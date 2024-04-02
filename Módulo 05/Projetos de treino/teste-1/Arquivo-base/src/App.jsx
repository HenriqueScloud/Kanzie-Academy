// import { Sectio } from "./components/section/Sectio";

import { useState } from "react";

function App() {
  const [profList, setProfList] = useState([
    {
      name:'henrique',
      job: 'developer',
      budget: 7000,

    }
  ]);
  // criando variavel com lista de professores com base em estados 


  // crinado as variaveis que vao receber os inputs para novos dados de estados 

  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [budget, setbudget] = useState(0);



  const addProf = ()=>{

    const newProf = {
      name:name,
      job:job,
      budget: Number(budget)
    }



    setProfList([...profList,newProf])
  }
  // criando uma nova renderização dos  dados da lista de professores.





  // criando uma lista filtrada com somente os professores de javascript 
  // const javascriptTeacher = profList.filter(item => item.job ==='teahcer')

  








  return (
    <>
    <form>
      <label htmlFor="nome">Nome do Professor</label><br />
      <input type="text" name="nome" id="nome" onChange={()=>setName(event.target.value)}/><br />

      <label htmlFor="job">job</label><br />
      <input type="text" name="job" id="job" onChange={()=>setJob(event.target.value)}/><br />

      <label htmlFor="budget">budget </label><br />
      <input type="text" name="budget" id="budget" onChange={()=>setbudget(event.target.value)}/><br />
    </form>
    <button onClick={addProf}>Adicionar Professor</button>


    <section>
      <ul>
        {profList.map((item)=>{
          return(
            <li key={item.id}>
              <h1>{item.name}</h1>
              <p>Job: {item.job} - Budget: R$ {item.budget}</p>
            </li>
          )
        })}
      </ul>
    </section>
    </>
  );
}

export default App;
