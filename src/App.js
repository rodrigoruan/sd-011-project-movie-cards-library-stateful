import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieList from './components/MovieList';
import filmes from './data';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />

      <MovieList className="movie-list" movies={ filmes } />
    </div>
  );
}

export default App;
