const originalBookList = [
    {
      title: "Aprendendo JavaScript Básico",
      author: "John Doe",
      pages: 200,
      condition: "novo",
    },
    {
      title: "HTML e CSS Desvendados",
      author: "Jane Smith",
      pages: 150,
      condition: "desgastado",
    },
    {
      title: "Node.js para Iniciantes",
      author: "Bob Johnson",
      pages: 250,
      condition: "conservado",
    },
    {
      title: "React.js na Prática",
      author: "Alice Green",
      pages: 180,
      condition: "novo",
    },
    {
      title: "PHP e MySQL para Web",
      author: "Charles Brown",
      pages: 220,
      condition: "desgastado",
    },
    {
      title: "Python para Data Science",
      author: "David Lee",
      pages: 300,
      condition: "novo",
    },
    {
      title: "Ruby on Rails em 24 Horas",
      author: "Emma White",
      pages: 240,
      condition: "conservado",
    },
    {
      title: "Java para Desenvolvedores Android",
      author: "Frank Black",
      pages: 280,
      condition: "novo",
    },
    {
      title: "C# e .NET para Jogos",
      author: "Grace Kim",
      pages: 260,
      condition: "desgastado",
    },
    {
      title: "Laravel: O Framework PHP Moderno",
      author: "Henry Jones",
      pages: 210,
      condition: "novo",
    },
    {
      title: "Django: O Framework Python Completo",
      author: "Iris Wang",
      pages: 270,
      condition: "conservado",
    },
    {
      title: "Angular: O Framework JavaScript Poderoso",
      author: "James Smith",
      pages: 230,
      condition: "novo",
    },
    {
      title: "Swift: A Linguagem da Apple",
      author: "Kelly Clark",
      pages: 190,
      condition: "desgastado",
    },
    {
      title: "WordPress: O CMS Mais Popular do Mundo",
      author: "Laura Miller",
      pages: 160,
      condition: "novo",
    },
    {
      title: "MongoDB: O Banco de Dados NoSQL",
      author: "Mark Wilson",
      pages: 200,
      condition: "conservado",
    },
    {
      title: "Bootstrap: O Framework CSS Responsivo",
      author: "Nancy Davis",
      pages: 140,
      condition: "novo",
    },
    {
      title: "Vue.js: O Framework JavaScript Simples",
      author: "Oscar Lopez",
      pages: 170,
      condition: "desgastado",
    },
    {
      title: "Flask: O Microframework Python",
      author: "Rachel Adams",
      pages: 150,
      condition: "novo",
    },
    {
      title: "Sass: O Pré-processador CSS",
      author: "Scott Baker",
      pages: 130,
      condition: "conservado",
    },
    {
      title: "TypeScript: O JavaScript Tipado",
      author: "Zoe Taylor",
      pages: 190,
      condition: "novo",
    },
  ];


function createBookCard(book){

    // criando tags
    const liBook = document.createElement('li');

    const divBookInfo = document.createElement('div');
    const h3BookInfo = document.createElement('h3');
    const h4BookInfo = document.createElement('h4');
    const spanBookInfo = document.createElement('span');
    const divConditionBookInfo = document.createElement('div');
    const spanConditionMarkerBookInfo = document.createElement('span');
    const spanConditionDescriptionBookInfo = document.createElement('span');
    const buttonBookInfo = document.createElement('button');
    

    //aplicando class nas tags 

    liBook.classList.add('book');
    divBookInfo.classList.add('book__info');
    h3BookInfo.classList.add('book__title');
    h4BookInfo.classList.add('book__author');
    spanBookInfo.classList.add('book__pages');
    divConditionBookInfo.classList.add('book__condition');
    spanConditionMarkerBookInfo.classList.add('condition__marker');
    spanConditionDescriptionBookInfo.classList.add('condition__description');
    buttonBookInfo.classList.add("book__delete-btn");


    if (book.condition ==="novo"){
        spanConditionMarkerBookInfo.classList.add('condition__marker--new')
    }
    else if(book.condition ==='conservado'){
        spanConditionMarkerBookInfo.classList.add('condition__marker--fair')
    }
    else if(book.condition === 'desgastado'){
        spanConditionMarkerBookInfo.classList.add('condition__marker--edgeworn')
    }

    //organizando conteudo da LI

    liBook.append(divBookInfo,buttonBookInfo);
    divBookInfo.append(h3BookInfo,h4BookInfo,spanBookInfo,divConditionBookInfo);
    divConditionBookInfo.append(spanConditionMarkerBookInfo,spanConditionDescriptionBookInfo);

    // aplicando conteudo de texto

    h3BookInfo.innerText = book.title;
    h4BookInfo.innerText = book.author;
    spanBookInfo.innerText = `Páginas: ${book.pages}`;
    spanConditionDescriptionBookInfo.innerText=book.condition;
    buttonBookInfo.innerText = 'deletar';

    //adicionando um evento ao btn de deletar 
    buttonBookInfo.addEventListener('click',()=> {
        const foundIndex = originalBookList.indexOf(book);
        originalBookList.splice(foundIndex,1);
        renderBooks(originalBookList);
    })


    return liBook; //// tem que pooooooooooooor o return merda 



}
createBookCard(originalBookList);


function renderBooks(listBooks){
    const ulBooks = document.querySelector('.books');
    ulBooks.innerHTML = ''
    listBooks.forEach((book) => {
        const bookCard = createBookCard(book);
        ulBooks.appendChild(bookCard)
    });
}
renderBooks(originalBookList);


function addNewBook(){
    const form = document.querySelector('.add-book__form');
    
    form.addEventListener('submit', function(event){
        event.preventDefault();
        console.log('evento ativado!')
        const title = document.querySelector('#book-title__input').value;
        const author = document.querySelector('#book-author__input').value;
        const pages = document.querySelector('#book-pages__input').value;
        const condition = document.querySelector('#book-condition__select').value;

        const newBokk = {
            title: title,
            author: author,
            pages: pages,
            condition: condition,
        }
        originalBookList.push(newBokk);
        renderBooks(originalBookList);
    })
}
addNewBook();

