import { useEffect, useState } from "react";
import { api } from "./services/apis";

function App() {
    const [count, setCount] = useState(0);
    const [user, setUser]=useState([])
    const url = "https://api.github.com/users/HenriqueScloud";

    useEffect(()=>{

        const fetchData = async () =>{
            // return setUser(await fetch(url).then((res) => res.json()));

            const {data} = await api.get(url);


            setUser(data);
        }
        fetchData()
    },[])


    












    const addCount = () => {
        setCount(count + 1);
    };
    const delCount = () => {
        setCount(count - 1);
    };






    return (
        <>
            <h1>Hello World!</h1>
            <p>Welcome to Next.</p>
            <br />

            <div>
            <h1>{count}</h1>
            <button onClick={() => addCount()}>+</button>
            </div>
            <div>
            <h1>{count}</h1>
            <button onClick={() => delCount()}>-</button>
            </div>

            <br />
            <br />

            <div>
            <h1>name: {user.name}</h1>
            <img src={user.avatar_url} />
            </div>
        </>
    );
}

export default App;
