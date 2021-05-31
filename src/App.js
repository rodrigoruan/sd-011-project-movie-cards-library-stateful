import React from 'react';
import Header from './components/Header';
import './App.css';
// import MovieLibrary from './components/MovieLibrary';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar searchText="" bookmarkedOnly={ false } selectedGenre="" />
    </div>
  );
}

export default App;
