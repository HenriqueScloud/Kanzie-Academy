const data = [
  {
    name: "Hotel Cancun",
    country: "México",
    price: 250,
    isOpen: true,
    toBook: [
      {
        date: "24/05/2023",
        isAvailable: true,
      },
      {
        date: "30/07/2023",
        isAvailable: false,
      },
      {
        date: "04/01/2024",
        isAvailable: true,
      },
    ],
  },
  {
    name: "Pousada do Zé",
    country: "Brasil",
    price: 130,
    isOpen: true,
    toBook: [
      {
        date: "17/03/2023",
        isAvailable: false,
      },
      {
        date: "10/05/2023",
        isAvailable: false,
      },
      {
        date: "21/06/2024",
        isAvailable: false,
      },
    ],
  },
  {
    name: "Copacabana Palace",
    country: "Brasil",
    price: 350,
    isOpen: false,
    toBook: [
      {
        date: "15/01/2023",
        isAvailable: true,
      },
      {
        date: "04/02/2023",
        isAvailable: true,
      },
      {
        date: "09/08/2024",
        isAvailable: false,
      },
    ],
  },
  {
    name: "Empire Hotel",
    country: "Estados Unidos",
    price: 400,
    isOpen: false,
    toBook: [
      {
        date: "31/12/2022",
        isAvailable: false,
      },
      {
        date: "04/02/2023",
        isAvailable: false,
      },
      {
        date: "29/07/2024",
        isAvailable: false,
      },
    ],
  },
];
