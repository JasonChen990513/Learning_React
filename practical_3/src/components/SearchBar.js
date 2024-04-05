import './SearchBar.css';
import { useState } from "react";
function SearchBar({onSubmit}){
    const [term , setTerm] = useState('');

    const handleFormSubmit = (event) =>{
        //prevent auto reload the page
        event.preventDefault();
        //do not do like this
        //const input = document.querySelector('input').value;

        //console.log('here is submit',term);
        //call the parent function
        onSubmit(term);
        
    };

    const handleChange = (event) =>{
        setTerm(event.target.value);
        //console.log('here is on change',term);
    }

    return <div className="search-bar">
        <form onSubmit={handleFormSubmit} >
            <label>Enter Search Term</label>
            <input value={term} onChange={handleChange}/>
        </form>
    </div>
}

export default SearchBar;