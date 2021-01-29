import './App.css';
import Header from './Components/Header';
import CharacterButton from './Components/CharacterButton';
import CharactersContainer from './Components/CharactersContainer';



import { useState } from 'react';

function App() {
  const [characterArray, setCharacterArray] = useState([]);

  async function getCharacter() {
    const characterPromise = fetch('', {
      headers: {
          Accept: 'application/json'
      }
    });
    const response = await characterPromise;
    const characterData = await response.json();

    console.log(characterData);
    setCharacterArray([
      ...characterArray,
      characterData
    ]);
  }

  function deleteCharacter(id) {
    console.log(`You want to delete ${id}`);
    const filiteredArray = characterArray(j=> j.id !==id);

    setCharacterArray(characterArray)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <CharacterButton handleClick={getCharacter}/>
        <CharactersContainer
          characters={characterArray}
          handleDelte={deleteCharacter}
        />
      </header>
    </div>
  );
}

export default App;
