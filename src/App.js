import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
/* import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import SearchBar from './components/SearchBar'; */
import Data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ Data } />
      {/*       <SearchBar />
      <MovieList movies={ Data } />
      <AddMovie /> */}
    </div>
  );
}

export default App;
