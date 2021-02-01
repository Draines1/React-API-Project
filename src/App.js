import './App.css';
import Header from './Components/Header';
import CharacterButton from './Components/CharacterButton';
import CharactersContainer from './Components/CharactersContainer';
import Tvshows from './Components/Tvshows';

import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link,
        Redirect,
} from 'react-router-dom';

import { useEffect, useState } from 'react';

function App() {
  const [characterArray, setCharacterArray] = useState([]);

  async function getCharacter(characterRole) {
    const response = await fetch('http://api.tvmaze.com/shows/1', {
      headers: {
          Accept: 'application/json'
        },
      }
    
    );
    const characterData = await response.json();
      setCharacterArray(data.results)

  }
    console.log(characterData);
    useEffect(() => {
            getTvshow();
    
  }, []);

{

  
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <CharacterButton handleClick={getCharacter}/>
          <CharactersContainer
            characters={characterArray}
          />
          <Tvshows />
        </header>
      </div>
    </Router>
  );
}

export default App;
