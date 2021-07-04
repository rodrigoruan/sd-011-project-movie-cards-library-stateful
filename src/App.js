import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

function App() {
  function teste(state) {
    console.log(state);
  }
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText=""
        onSearchTextChange={ () => {} }
        bookmarkedOnly={ false }
        onBookmarkedChange={ () => {} }
        selectedGenre=""
        onSelectedGenreChange={ () => {} }
      />
      <AddMovie onClick={ teste } />
    </div>
  );
}

export default App;
