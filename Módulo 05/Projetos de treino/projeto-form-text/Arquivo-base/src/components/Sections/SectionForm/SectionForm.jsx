
import { useState } from "react";
// importando as funções do react para utilizar dentro do arquivo 


export const SectionForm = () =>{

    //criando as variaveis com o useStates para criar dinamismo dentra interração com os inputs
    const [name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Num, setNum] = useState('');



{/*criando lista de itens com useStates para melhor dinamica com os resursos da propriedade  */}
    const [nameList, setNameList]  = useState([
        {
            name:  'Luiz',
            Email:'luiz@email.com',
            id: crypto.randomUUID(),
            Num: 100,

        },
        {
            name:  'Paula',
            Email:'luiz@email.com',
            id: crypto.randomUUID(),
            Num: 200,

        },
        {
            name:  'Henrique',
            Email:'luiz@email.com',
            id: crypto.randomUUID(),
            Num: 300,

        },
        
    ]);

    const CadastroUser = (event) => {
            event.preventDefault();
            const newName = {
                name,
                Email,
                id: crypto.randomUUID(),
                Num: Number(Num),
            }
            const newListName = [...nameList,newName]
            setNameList(newListName);
            
        }


        const returnTotal = () => {
            const varTotal = nameList.reduce((acc,name) => {
                return acc+=name.Num
        },0)
        return varTotal;
        }


    return(
        <section>
            <form  onSubmit={CadastroUser}> 
                <label htmlFor="name">Name:</label><br />
                <input  type="text"
                        id="name" 
                        name="name"
                        // criando o onChange para interação do  usuário com o input e implementação do useStats
                        onChange={()=>setName(event.target.value)}
                        /><br />
                
                <label htmlFor="email">Email:</label><br />
                <input  
                    type="email"  
                    id="email"  
                    name="email" 
                        // criando o onChange para interação do  usuário com o input e implementação do useStats
                    onChange={()=>setEmail(event.target.value)}
                    /><br />
                

                <label htmlFor="Num">Numero:</label>
                <input  
                    type="Num"  
                    id="Num"  
                    name="Num" 
                        // criando o onChange para interação do  usuário com o input e implementação do useStats
                    onChange={()=>setNum(event.target.value)}
                    /><br />
                    <button>Enviar</button>

                    
            </form>
            

            <ul >{/* criando lista dinamica com useStates */}
                <h1>nomes:</h1>
                {nameList.map((item)=>{
                    return (
                        <li key={item.id}>
                            <h2>Nome :{item.name}</h2>
                            <p>Email:{item.Email} </p>
                            <p>Num:{item.Num} </p>
                            <button>remove</button>
                        </li>
                    )
                })}
            </ul>

            <section>
                <h1>soma:{returnTotal()}</h1>
            </section>
        </section>
    )
}