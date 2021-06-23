import React from 'react';
import Header from './components/Header';
import './App.css';
// import SearchBar from './components/SearchBar';
// import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';
import Data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ Data } />
    </div>
  );
}

export default App;
