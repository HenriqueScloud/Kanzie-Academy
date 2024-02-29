import { renderAlbumListCards } from "./index.js";

export function applyInputRangeStyle() {
    const inputRange = document.querySelector("#price__range-input");

    inputRange.addEventListener("input", (event) => {
    const currentInputValue = event.target.value;
    const runnableTrackProgress = (currentInputValue / inputRange.max) * 100;

    inputRange.style.background = `linear-gradient(to right, var(--brand-1) ${runnableTrackProgress}%, var(--gray-6) ${runnableTrackProgress}%)`;
    });
}
export function handleStatFilters(ArrayAlbunsDataBase) {
    const filtreInputRange = document.querySelector("#price__range-input");
    filtreInputRange.addEventListener("input", (event) => {
    const currentInputStat = event.target.previousElementSibling;

    const filtroGenre = document.querySelector(
        ".filtro__genre-btn--ativo"
    ).innerText;

    const currentInputStatSpan =
        currentInputStat.querySelector(".price-range-value");
    const currentInputDataValue = event.target.valueAsNumber;
    currentInputStatSpan.innerText = currentInputDataValue;

    const arrayAlbunsFiltred = ArrayAlbunsDataBase.filter(
        ({ price, genre }) => {
        if (filtroGenre == "Todos") {
            return price <= currentInputDataValue;
        }
        return (
            (price <= currentInputDataValue && genre == filtroGenre) ||
            (genre === "Todos" && price <= currentInputDataValue)
        );
        }
    );
    renderAlbumListCards(arrayAlbunsFiltred);
    });
}
export function handleFiltredButtonsGenre() {
    const botoesGeneros = document.querySelector(".filtro__genre-btn--ativo");
    botoesGeneros.addEventListener("click", handleStatFilters);
}
