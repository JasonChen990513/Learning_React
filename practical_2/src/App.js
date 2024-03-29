import 'bulma/css/bulma.css'
import { useState } from 'react'
import AnimalShow from './AnimalShow';

function getRandomAnimal(){
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random()*animals.length)]
}

console.log(getRandomAnimal());

function App(){
    const [animals, setAnimals] = useState([]);

    const handleClick = () =>{
        setAnimals([...animals, getRandomAnimal()]);
        console.log(animals);
    }

    const renderAnimal = animals.map((animal, index)=>{
        return <AnimalShow type={animal} key={index}/>;
    })

    return (
        <div>
            <button className='button is-light' onClick={handleClick}>show animal list here</button>
            <div>
                {renderAnimal}
            </div>
        </div>


    )
}

export default App;