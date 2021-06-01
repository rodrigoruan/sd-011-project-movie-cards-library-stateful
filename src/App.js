import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieList from './components/MovieList'
import data from './data'

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar searchText={} onSearchTextChange={} bookmarkedOnly={}
        onBookmarkedChange={} selectedGenre={} onSelectedGenreChange={} />
      <MovieList movies={data} />
    </div>
  );
}

export default App;
