import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import searchImage from "./api.js";
import { useState } from "react";

//searchImage();


function App(){
    const [image, setImage] = useState([]);


    const handleSubmit = async (term) =>{
        //console.log('do search with',term )
        const result = await searchImage(term);
        setImage(result);
        console.log(result);
    };

    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images={image}/>

        </div>

    )
}

export default App;