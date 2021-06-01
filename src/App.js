import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import Addmovie from './components/AddMovie.js'

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar/>
      <AddMovie />
    </div>
  );
}

export default App;
