import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieList from './components/MovieList';
import movies from './data';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText=""
        onSearchTextChange=""
        bookmarkedOnly=""
        selectedGenre=""
        onSelectedGenreChange=""
        onBookmarkedChange=""
      />
      <MovieLibrary movies="um Array" />
      <MovieList movies={ movies } />
      <AddMovie />
    </div>
  );
}

export default App;
