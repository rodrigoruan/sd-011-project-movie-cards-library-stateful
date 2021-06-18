import React from 'react';
import Header from './components/Header';
import './App.css';
// import SearchBar from './components/SearchBar';
// import AddMovie from './components/AddMovie';
import data from './data';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <SearchBar /> */}
      <MovieLibrary movies={ data } />
      {/* <AddMovie /> */}
    </div>
  );
}

export default App;
