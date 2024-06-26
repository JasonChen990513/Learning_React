import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

function App() {
    const {fetchBooks, books} = useContext(BooksContext);

    useEffect(()=>{
        fetchBooks();
    }, [fetchBooks]);
    //Do not do this, it will cause infinity loop
    //fetchBooks();



    return(
        <div className="app">
            <h1>Reading List</h1>
            <BookList/>
            <BookCreate/>
        </div>
    )
}

export default App;