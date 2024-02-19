
import { pokemonList } from "./pokeDatabase.js";

function createPokemonCard({id,name,img,types,hp,attack,defense,speed}){
    const liCard = document.createElement('li');
    liCard.classList.add('card');
    const iconState = 'ifavoritado';
    const favIcon = iconState === 'favoritado' ? `<i class="card__fav fa-solid fa-star"></i>`: `<i class="card__fav fa-regular fa-star"></i>`;
    liCard.innerHTML = `
    ${favIcon}
    <p class="card__hp">
        <span>HP</span>
        ${hp}
    </p>
    <img
        class="card__image"
        src="${img}"
        alt="Imagem do Pokemon ${name}"
    />
    <h2 class="card__name">${name}</h2>
    <small class="card__type">${types}</small>
    <ul class="card__stats">
        <li class="card__stat">
        <h3 class="stat__value">${attack}</h3>
        <p class="stat__type">ATQ</p>
        </li>
        <li class="card__stat">
        <h3 class="stat__value">${defense}</h3>
        <p class="stat__type">DEF</p>
            </li>
        <li class="card__stat">
        <h3 class="stat__value">${speed}</h3>
        <p class="stat__type">VEL</p>
        </li>
    </ul>`
    return liCard;
};// criando os cards 

function renderPokemonCards(pokemonArray){
    const ulCards = document.querySelector('.cards');
    pokemonArray.forEach((pokemonInfo)=>{
    const pokemonCard = createPokemonCard(pokemonInfo)
    ulCards.appendChild(pokemonCard);
});
}; // renderizando os cards para atualizar a lista de  Pokemons na tela com o banco de dados javascript 
renderPokemonCards(pokemonList);