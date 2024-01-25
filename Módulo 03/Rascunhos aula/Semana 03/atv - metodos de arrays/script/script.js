//Desenvolva sua lógica aqui utlizando o método de array filter e verifique o resultado no console do seu navegador.

//1) Crie uma função para filtrar os hotéis que estão localizados no Brasil
function filterCountry(array) {
  return array.filter((hotel)=> hotel.country == "Brasil");
}
//console.log(filterCountry(data));

// 2) Crie uma função para filtrar os hotéis que possuem o preço igual ou maior que R$200,00.
function filterPrice(array) {
  return array.filter(hotel=>hotel.price >= 200);
}
//console.log(filterPrice(data));

//3) Crie uma função para filtrar os hotéis que estão abertos nesse momento (isOpen)
function filterIsOpen(array) {
  return array.filter(hotel=>hotel.isOpen);
}
//console.log(filterIsOpen(data));

//DESAFIO
//4) Crie uma função que filtre apenas o hotel com o nome “Copacabana Palace”. Após isso, crie outra função para verificar as datas disponíveis para agendamento nesse hotel (isAvaliable).
function filterHotelName(array) {
  return array.filter((hotel)=>{
    return hotel.name ==="Copacabana Palace";
  });
}
function filterToBook() {
  const hotel = filterHotelName(data)[0];
  return hotel.toBook.filter((bookingInfor) => {
    return bookingInfor.isAvailable;
  });
}
console.log(filterToBook());

