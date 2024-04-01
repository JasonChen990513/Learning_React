function SearchBar({onSubmit}){

    const handleFormSubmit = (event) =>{
        //prevent auto reload the page
        event.preventDefault();

        const input = document.getElementById('user-input');
        //call the parent function
        onSubmit(input.value);
        
    };

    return <div>
        <form onSubmit={handleFormSubmit}>
            <input id="user-input"/>
        </form>
    </div>
}

export default SearchBar;