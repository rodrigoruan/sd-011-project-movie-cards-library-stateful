import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieList from './components/MovieList'
import data from './data'
import AddMovie from './components/AddMovie'

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar searchText={} onSearchTextChange={} bookmarkedOnly={}
        onBookmarkedChange={} selectedGenre={} onSelectedGenreChange={} />
      <MovieList movies={data} />
      <AddMovie onClick={} />
    </div>
  );
}

export default App;
