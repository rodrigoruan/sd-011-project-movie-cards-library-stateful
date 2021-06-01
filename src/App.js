import React from 'react';
import './App.css';
import Header from './components/Header';
import movie from './data';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movie } />
    </div>
  );
}

export default App;
