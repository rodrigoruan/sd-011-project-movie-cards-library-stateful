import React from 'react';
import Header from './components/Header';
// import MovieList from './components/MovieList';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';
// import SearchBar from './components/SearchBar';
// import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
    </div>
  );
}

export default App;
