import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieList from './components/MovieList';
import filmes from './data';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieLibrary />
      <MovieList className="movie-list" movies={ filmes } />
      <AddMovie />
    </div>
  );
}

export default App;
