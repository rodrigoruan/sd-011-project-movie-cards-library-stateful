import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import MovieList from './components/MovieList';


function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary />
      <MovieList />
    </div>
  );
}

export default App;
