import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";
import { useEffect } from "react";

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () =>{
        const allRespone = await axios.get('http://localhost:3001/books');
        console.log(allRespone.data);
        setBooks(allRespone.data)
    };

    useEffect(()=>{
        fetchBooks();
    }, []);
    //Do not do this, it will cause infinity loop
    //fetchBooks();

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

    return(
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
            <BookCreate onCreate = {createBook}/>
        </div>
    )
}

export default App;