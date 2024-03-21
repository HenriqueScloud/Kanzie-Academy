import { useState } from "react"; // import da função useState do React

export const BookEx = () => {


    // criando lista de livros com estados para usar o useStates 
    const [bookList, setBookList] = useState([
        {
            id: crypto.randomUUID(),
            title:  'The Alchemist', 
            author: 'Paulo Coelho'
        },
        {
            id: crypto.randomUUID(),
            title:  'The doctor', 
            author: 'Paulo Coelho',
        },
    ]);

    const [author, setAutor] = useState(''); // criando as variaveis com useStates 
    const [title, setName] = useState('') //crinado as variaveis com useStates para nao precisar usar o dom



    const bookSubmitHandle = (event) => {
        event.preventDefault();
        addBook({title,author});
    }
    // criando o novo livro 
    const addBook = (bookData) => {
        const newBook = {
            id: crypto.randomUUID(),
            title: bookData.title,
            author: bookData.author,
        }
        setBookList([...bookList,newBook]);
        //concatenou o array de livros que ja existia com o novo objeto que foi criado
    }
    // removnedo livro existente 
    const removeBook = (bookId) =>{
        const filtroBokList = bookList.filter(book => book.id !== bookId);
        //criou uma nova lista de livros sem o livre que tem o id selecionado 
        setBookList(filtroBokList);
    }


    // retornando a extrutura html 
    return (
        <>
            <form onSubmit={bookSubmitHandle}>
                <h2>Cadastros de Livros </h2>
                <label htmlFor="name">Nome: </label>
                <input type="text" name="name" id="name" onChange={()=>setName(event.target.value)}/><br />

                <label htmlFor="autor">Autor: </label>
                <input type="text" name="name" id="autor" onChange={()=>setAutor(event.target.value)}/>
                <button type="submit" > Cadrastrar</button>
            </form>

            <section>
                <h2>Lista de Livros </h2>
                <ul >
                    {bookList.map(book=>{
                        return (
                            <li key={book.id}>
                                <h3>{book.title}</h3>
                                <p>{book.author}</p>
                                <button onClick={() => removeBook(book.id)}>Remover</button>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </>
    )
}


// A principal função dos estados é evitar a interação com o dom em javascript 