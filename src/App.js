import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <main>
      <header className="App">
        <Header />
      </header>
      <section>
        <SearchBar
          searchText=""
          onSearchTextChange=""
          bookmarkedOnly=""
          onBookmarkedChange=""
          selectedGenre=""
          onSelectedGenreChange=""
        />
      </section>
    </main>
  );
}

export default App;
