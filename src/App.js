import React from 'react';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import './App.css';
import MovieList from './components/MovieList'
import data from './data'
import AddMovie from './components/AddMovie'
import MovieLibrary from './components/MovieLibrary'

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={data} />
      {/* <SearchBar searchText='' onSearchTextChange='' bookmarkedOnly=''
        onBookmarkedChange='' selectedGenre='' onSelectedGenreChange='' /> */}
      {/* <MovieList movies={data} /> */}
      {/* <AddMovie onClick='' /> */}
    </div>
  );
}

export default App;
