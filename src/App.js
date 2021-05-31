import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';
import movies from './data';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <SearchBar searchText={  } />
      </div>
      <div className="movie-list">
        <MovieList movies={ movies } />
      </div>
    </div>
  );
}

export default App;
