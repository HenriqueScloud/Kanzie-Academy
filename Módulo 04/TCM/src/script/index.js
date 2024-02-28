import {  selectedFiltroGenre  } from './theme.js';
import {  applyInputRangeStyle  } from './inputRange.js';
import {  albumList  } from './albumsDatabase.js';



function creatCardsAlbumList(albumCardDataBase){

    const ulAlbunsCards = document.querySelector('.albun__cards');

    const band = albumCardDataBase.band;
    const title = albumCardDataBase.title;
    const genre = albumCardDataBase.genre;
    const price = albumCardDataBase.price;
    const img = albumCardDataBase.img;


    let li = document.createElement('li')
    li.innerHTML = `

    <li class="albun__card">
        <img src=${img} alt="Imagem do Album 1" class="albun__card-img">
        <div class="albun__card-description">
            <h1 class="albun__card-title">${title}</h1>
            <div class="albun__card-details">
                <p class="albun__card-detail--autor">${band}</p>
                <span class="albun__card-detail--genre">${genre}</span>
            </div>
            <div class="albun__card-price">
                <p class="albun__card-price-valor">R$ <span class="albun__card-price-value">${price}</span></p>
                <button class="albun__card-price-btn">Comprar</button>
            </div>
        </div>
    </li>
    `;
    ulAlbunsCards.appendChild(li);
}





function renderAlbumListCards(albumDataBase){
    for(let i = 0; i<albumDataBase.length;i++){
        creatCardsAlbumList(albumDataBase[i])
    };
};













function routine(){
    selectedFiltroGenre();
    applyInputRangeStyle();
    renderAlbumListCards(albumList);





}
routine();