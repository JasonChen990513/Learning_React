import axios from "axios";


const searchImage = async (term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID VXuyUh3W9zGsRh-jxBX9OKo0WwYupj560eMTceHI4o8',
        },
        params:{
            query: term,
        }
    });
    console.log(response.data.results);
    return response.data.results;
};

export default searchImage; 