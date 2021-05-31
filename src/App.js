import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchBar
        searchText=""
        onSearchTextChange=""
        bookmarkedOnly=""
        onBookmarkedChange=""
        selectedGenre=""
        onSelectedGenreChange=""
      />
      <Header />
    </div>
  );
}

export default App;
