import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import BooksContext from './context/books';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<div>
    <BooksContext.Provider value={5}>
        <App/>
    </BooksContext.Provider>

    </div>)




