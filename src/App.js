import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText=""
        onSearchTextChange={ callback }
        bookmarkedOnly={ false }
        onBookmarkedChange={ callback }
        selectedGenre=""
        onSelectedGenreChange={ callback }
      />
      <AddMovie onClick={ onClick } />
    </div>
  );
}

export default App;
