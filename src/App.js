import './App.css';
import Header from './Components/Header';
import TvButton from './Components/TvButton';
import TvShowContainer from './Components/TvShowContainer';
import Tvshows from './Components/Tvshows';

// import {
//         BrowserRouter as Router,
//         Switch,
//         Route,
//         Link,
//         Redirect,
// } from 'react-router-dom';

import { useEffect, useState } from 'react';

function App() {
  const [tvshowArray] = useState([]);

  async function getTvShow() {
    const response = await fetch(
      'http://api.tvmaze.com/shows') 
      .then(r=>r.json())
      .then(results => results)
    
    console.log(response)
    
  //const characterData = await response.json();
      //settvshowArray(data.results)

  }
    // console.log(characterData);
    
      useEffect(() => {
           getTvShow();
    
  }, []);

{

  
  }

  return (
    //<Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <TvButton handleClick={getTvShow}/>
          <TvShowContainer
            tvshows={tvshowArray}
          />
          <Tvshows />
        </header>
      </div>
    //</Router>
  );
}

export default App;
