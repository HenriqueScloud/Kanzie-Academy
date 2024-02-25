const fetchPokemon = async ()=> {
    const url = 'https://pokeapi.co/api/v2/pokemon/25';
    const data = await fetch(url).then((res)=> res.json());

    return data

}; // função para pegar o banco de dados inteiro pela url


const processPokemonData = (pokemonData) => {

    const name = pokemonData.name;
    return name;

};

const mountPokemonArray = async () => {
    const pokemonData = await fetchPokemon();
    const processedPokemonData = processPokemonData(pokemonData);
    console.log(processedPokemonData)

}
mountPokemonArray();


