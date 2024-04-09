import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({children}){
    //const book
    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback( async () =>{
        const allRespone = await axios.get('http://localhost:3001/books');
        setBooks(allRespone.data)
    }, []);

    //const stableFetchBooks = useCallback(fetchBooks, []);

    const createBook = async (title) =>{

        const respone = await axios.post('http://localhost:3001/books',{
            title: title
        });

        const updateBooks = [...books, respone.data];
        console.log(updateBooks);
        setBooks(updateBooks);
    };

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)
        const updateBooks = books.filter((book)=>{
            return book.id !== id;
        });
        setBooks(updateBooks);
    };

    const editBookById = async (id, newTitle) =>{
        const respone = await axios.put(`http://localhost:3001/books/${id}`,{
            title: newTitle
        })

        const updateBooks = books.map((book)=>{
            if(book.id === id){
                return {...book, ...respone.data}
            }
            return book;
        });
        setBooks(updateBooks);
    };

    const valueToShare = {
        //same as books: books,
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks
    };

    return(
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
}


export { Provider }
export default BooksContext;
