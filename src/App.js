import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieLibrary from './components/MovieLibrary';
import movie from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieList movies={ movie } />
      <MovieLibrary />
    </div>
  );
}

export default App;
