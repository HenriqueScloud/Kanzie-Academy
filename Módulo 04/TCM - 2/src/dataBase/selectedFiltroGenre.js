export function selectedFiltroGenre(){
    const li = document.querySelectorAll('.filtro__genre-btn');
    li.forEach( item => {
        item.addEventListener( 'click', (event)=>{ 
            li.forEach(item => {item.classList.remove('filtro__genre-btn--ativo')});
            const btn = event.target;
            btn.classList.add('filtro__genre-btn--ativo');
        });
    });
};
