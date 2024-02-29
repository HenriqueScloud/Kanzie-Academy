import {  selectedFiltroGenre  } from './selectedFiltroGenre.js';
import {  applyInputRangeStyle, handleStatFilters  } from './inputRange.js';
import {  ThemeDarkMode  } from './theme.js';
import {  fetchAlbuns  } from './api.js';



function creatCardsAlbumList({img,title,genre,price,band}){

    const li = `
    <li class="albun__card">
        <img src="${img}" alt="Imagem do Album 1" class="albun__card-img">
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








    return li;
}

export async function renderAlbumListCards(albumData) {
    const ulAlbunsCards = document.querySelector('.albun__cards');
    ulAlbunsCards.innerHTML = '';

    
    const albumDataBase = await albumData;
    for (let i = 0; i < albumDataBase.length; i++) {
        ulAlbunsCards.innerHTML += creatCardsAlbumList(albumDataBase[i]);
    }



    console.log(ulAlbunsCards)
}
async function routine() {
    selectedFiltroGenre();
    applyInputRangeStyle();
    renderAlbumListCards(await fetchAlbuns());
    ThemeDarkMode();
    handleStatFilters(await fetchAlbuns());
}
routine();