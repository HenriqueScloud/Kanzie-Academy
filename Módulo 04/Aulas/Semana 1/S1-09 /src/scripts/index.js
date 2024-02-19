function createFoodCard(foodObj) {
  // CRIANDO ELEMENTOS HTML
  const liFood = document.createElement("li");
  const imgFood = document.createElement("img");
  const divFoodDetails = document.createElement("div");
  const h3FoodTitle = document.createElement("h3");
  const pFoodPrice = document.createElement("p");
  const btnAddFood = document.createElement("button");
  const spanAddFood = document.createElement("span");

  // HIERARQUIA DOS ELEMENTOS
  liFood.append(imgFood, divFoodDetails);
  divFoodDetails.append(h3FoodTitle, pFoodPrice, btnAddFood);

  // insertAdjacentElement
  btnAddFood.innerHTML =
    '<svg  width="18"  height="17"  viewBox="0 0 18 17"  fill="none"  xmlns="http://www.w3.org/2000/svg">  <path d="M15.7724 10.5086H6.61163L6.81616 11.513H15.2042C15.6855 11.513 16.0422 11.9618 15.9356 12.4331L15.7632 13.195C16.3473 13.4798 16.75 14.0811 16.75 14.777C16.75 15.7563 15.9525 16.5485 14.9743 16.5344C14.0423 16.5209 13.2758 15.7613 13.2507 14.8256C13.2369 14.3144 13.4408 13.8511 13.7758 13.5216H7.22425C7.54853 13.8406 7.75 14.2851 7.75 14.777C7.75 15.7755 6.921 16.5795 5.91656 16.5326C5.02469 16.491 4.29934 15.7673 4.25247 14.8718C4.21628 14.1803 4.5786 13.5708 5.12906 13.2528L2.93384 2.47407H0.75C0.335781 2.47407 0 2.13683 0 1.72083V1.21866C0 0.802656 0.335781 0.465424 0.75 0.465424H3.95403C4.31031 0.465424 4.61741 0.717163 4.68881 1.0677L4.97525 2.47407H17.2497C17.731 2.47407 18.0877 2.9229 17.981 3.39425L16.5038 9.92234C16.4262 10.2653 16.1226 10.5086 15.7724 10.5086ZM12.75 5.73811H11.25V4.48271C11.25 4.20536 11.0262 3.98055 10.75 3.98055H10.25C9.97385 3.98055 9.75 4.20536 9.75 4.48271V5.73811H8.25C7.97385 5.73811 7.75 5.96292 7.75 6.24027V6.74243C7.75 7.01978 7.97385 7.2446 8.25 7.2446H9.75V8.5C9.75 8.77735 9.97385 9.00216 10.25 9.00216H10.75C11.0262 9.00216 11.25 8.77735 11.25 8.5V7.2446H12.75C13.0262 7.2446 13.25 7.01978 13.25 6.74243V6.24027C13.25 5.96292 13.0262 5.73811 12.75 5.73811Z"    fill="black"  /></svg>';
  btnAddFood.appendChild(spanAddFood);

  // CONTEÚDOS INTERNOS
  imgFood.src = foodObj.img;
  imgFood.alt = `Imagem do prato ${foodObj.name}`;

  h3FoodTitle.innerText = foodObj.name;
  pFoodPrice.innerText = `R$ ${foodObj.price.toFixed(2)}`;
  spanAddFood.innerText = "Adicionar";

  // CLASSES
  liFood.classList.add("food__item");
  divFoodDetails.classList.add("food__details");
  h3FoodTitle.classList.add("food__title");
  pFoodPrice.classList.add("food__price");
  btnAddFood.classList.add("food__add-button");

  return liFood
}

function renderCards(foodList) {
  const ulMenuFoodList = document.querySelector(".menu__food-list")

  foodList.forEach((food) => {
    const foodCard = createFoodCard(food)
    ulMenuFoodList.appendChild(foodCard)
  })
}

renderCards(menuFoods)
