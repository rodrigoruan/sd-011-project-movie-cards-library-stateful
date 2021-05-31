import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText=""
        onSearchTextChange="Adicionar a logica callBack"
        bookmarkedOnly={ false } // Adicionar logica
        onBookmarkedChange="Adicionar a logica callBack"
        selectedGenre="Adicionar a logica"
        onSelectedGenreChange="Adicionar a logica callBack"
      />
    </div>
  );
}

export default App;
