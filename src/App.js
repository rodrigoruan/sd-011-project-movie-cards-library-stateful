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
        searchText="texto test"
        onSearchTextChange={ () => 'Isso é um teste' }
        bookmarkedOnly={ false } // Adicionar logica
        onBookmarkedChange={ () => 'Isso é outro teste' }
        selectedGenre="action" // Adicionar logica
        onSelectedGenreChange={ () => 'Isso é mais um teste' }
      />
      <AddMovie />
    </div>
  );
}

export default App;
