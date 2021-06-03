import React from 'react';
import Header from './components/Header';
import './App.css';
import AddMovie from './components/AddMovie';
import Data from './data';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <AddMovie />
      <MovieLibrary movies={ Data } />
    </div>
  );
}

export default App;
