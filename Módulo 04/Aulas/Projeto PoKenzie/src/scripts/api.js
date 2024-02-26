const fetchPokemon = async (pokemonID)=> {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;
    const data = await fetch(url).then((res)=> res.json());
    return data;
}; // função para pegar o banco de dados inteiro pela url e tratar os dados da api, 




const processPokemonData = (pokemonData) => {
    const name = pokemonData.name;
    const id = pokemonData.id;
    const img = pokemonData.sprites.other.dream_world.front_default; 
    const types = pokemonData.types.map(element=>element.type.name);
    const hpObj = pokemonData.stats.find((element)=> element.stat.name === "hp");
    const attackObj = pokemonData.stats.find((element)=> element.stat.name === "attack");
    const defenseObj = pokemonData.stats.find((element)=> element.stat.name === "defense");
    const speedObj = pokemonData.stats.find((element)=> element.stat.name === "speed");
    const hp = hpObj.base_stat;
    const speed = speedObj.base_stat;
    const defense = defenseObj.base_stat;
    const attack = attackObj.base_stat;
    const pokemonObj = {
        id,
        name,
        img,
        hp,
        defense,
        speed,
        attack,
        types,
    }; // criando array com dados que precisamos para montar o pokemonBase 
    return pokemonObj;
}; // function para criar o array personalidado do array geral da api




export const mountPokemonArray = async (amount=9) => {

    const pokemonArray = []; // pokemonDataBase que vai para  a pagina principal

    for (let i= 0; i < amount; i++){
        const pokemonData = await fetchPokemon(i+1);
        const processedPokemonData = processPokemonData(pokemonData);
        pokemonArray.push(processedPokemonData);
        
    }
    return pokemonArray

}; // chamando as function async e criar um array de objetos 