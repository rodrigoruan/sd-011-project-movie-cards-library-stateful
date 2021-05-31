import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import MovieCard from './components/MovieCard';
import Movies from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ Movies } />
      <MovieCard movie={ Movies } />
    </div>
  );
}

export default App;
