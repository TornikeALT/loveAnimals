import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const animalList = ['dog', 'horse', 'cat', 'bird', 'cow', 'gator'];
  return animalList[Math.floor(Math.random() * animalList.length)];
}

function App() {
  const [animal, setAnimal] = useState([]);
  const handleClick = () => {
    setAnimal([...animal, getRandomAnimal()]);
  };

  const randomAnimal = animal.map((el, i) => {
    return <AnimalShow type={el} key={i} />;
  });

  return (
    <>
      <div className="app">
        <button onClick={handleClick}>ADD ANIMAL</button>
        <div className="animal_list">{randomAnimal}</div>
      </div>
    </>
  );
}

export default App;
