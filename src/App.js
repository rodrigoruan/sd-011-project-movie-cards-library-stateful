import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import listOfMovies from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary listOfMovies={ listOfMovies } />
    </div>
  );
}

export default App;
