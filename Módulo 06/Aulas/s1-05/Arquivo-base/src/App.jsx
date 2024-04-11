function App() {

    const getFruts = async () =>{

        const link = await fetch("https://pokeapi.co/api/v2/pokemon");

        const linkJson = await link.json(); 
        console.log(linkJson);
    }



    return (
        <>
            <h1>Hello World!</h1>
            <p>Welcome to Next.</p>

            <button onClick={getFruts}>requisição dos lista de frutas</button>


        </>
    );
}

export default App;
