import React from 'react';
import Header from './components/Header';
import Data from './data';
import './App.css';
import MovieLibrary from './components/MovieLibrary';

// componente App -> renderiza o Header e o Movie Library passando como props os dados que estão no arquivo data importados logo acima

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ Data } />
    </div>
  );
}

export default App;
