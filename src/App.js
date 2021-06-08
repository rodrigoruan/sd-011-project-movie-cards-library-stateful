import React from 'react';
import Header from './components/Header';
import './App.css';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';

function create(n) {
  return [...movies,n];  
}

function App() {
  return (
    <div className="App">
      <Header />
      <AddMovie onClick={(n) => create(n) } />
      <MovieLibrary movies={ movies } />
    </div>
  );
}

export default App;
