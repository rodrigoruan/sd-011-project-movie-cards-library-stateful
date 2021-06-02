import React from 'react';
import Header from './components/Header';
import Movielibrary from './components/MovieLibrary';
import Data from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Movielibrary movies={ Data } />
    </div>
  );
}

export default App;
