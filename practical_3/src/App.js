import ImageShow from "./components/ImageShow";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import searchImage from "./api.js";

//searchImage();


function App(){
    const handleSubmit = (term) =>{
        //console.log('do search with',term )
        searchImage(term);
    };

    return (
        <div>
            <div>App</div>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList />
            <ImageShow />

        </div>

    )
}

export default App;