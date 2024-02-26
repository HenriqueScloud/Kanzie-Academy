
//import { pokemonList } from "./pokeDatabase.js";
import { mountPokemonArray } from "./api.js";
import  { handleDarkMode } from './theme.js';


function createPokemonCard({id,name,img,types,hp,attack,defense,speed}){
    const liCard = document.createElement('li');
    liCard.classList.add('card');

    liCard.innerHTML = `
    <i class="card__fav fa-regular fa-star"></i>
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
    <small class="card__type">${types.join(' - ')}</small>
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
    </ul>`;


    const favIcon = liCard.querySelector('.card__fav');
    handleFavoriteEvent(favIcon);

    return liCard;
};// criando os cards 










function renderPokemonCards(pokemonArray){

    const ulCards = document.querySelector('.cards');
    ulCards.innerHTML=''; // limpa o container antes de adicionar novos elementos
    pokemonArray.forEach((pokemonInfo)=>{
        const pokemonCard = createPokemonCard(pokemonInfo)
        ulCards.appendChild(pokemonCard);
    });
}; // renderizando os cards para atualizar a lista de  Pokemons na tela com o banco de dados javascript.











function handleFavoriteEvent(btnFav){

    btnFav.addEventListener('click', (event)=>{
        btnFav.classList.toggle('fa-solid');
        btnFav.classList.toggle('fa-regular');
    });
};










function handleStatFilters(pokemonArray){
    const  filters = document.querySelector(".filter__form");
    
    const attackFIlterInput = document.querySelector('#attack__range-filter');
    const defenseFIlterInput = document.querySelector('#defense__range-filter');
    const speedFIlterInput = document.querySelector('#speed__range-filter'); 

    
    
    
    filters.addEventListener('input', (event)=>{
        const currentFilterLabel = event.target.previousElementSibling;
        
        const currentFilterSpanLabel = currentFilterLabel.querySelector( 'span' );
        const currentInputValue = event.target.valueAsNumber;
        currentFilterSpanLabel.innerText = currentInputValue;
        
        const attackValue = attackFIlterInput.valueAsNumber;
        const defenseValue = defenseFIlterInput.valueAsNumber;
        const speedValue = speedFIlterInput.valueAsNumber;

        const filteredPokemonArray = pokemonArray.filter(({attack,defense,speed}) => { 
            return (attack <= attackValue &&
                    defense <= defenseValue &&
                    speed <= speedValue);
        });
        renderPokemonCards(filteredPokemonArray);
    });

};
















async function main(){
    //responsavel pela renderização dos cards 
    const pokemonArray = await mountPokemonArray(200);
    renderPokemonCards(pokemonArray); 

    // responsavel pelo dark mode 
    handleDarkMode();

    handleStatFilters(pokemonArray);
    
};
main();



