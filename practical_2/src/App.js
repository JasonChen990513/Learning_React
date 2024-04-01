//import 'bulma/css/bulma.css'
import { useState } from 'react'
import AnimalShow from './AnimalShow';
import './App.css';

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
        <div className='app'>
            <button className='button is-light' onClick={handleClick}>show animal list here</button>
            <div className='animal-list'>
                {renderAnimal}
            </div>
        </div>


    )
}

export default App;