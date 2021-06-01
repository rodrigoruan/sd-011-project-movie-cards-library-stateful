import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieCard />
    </div>
  );
}

export default App;
