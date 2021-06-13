import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <App movies={ data } />
    </div>
  );
}

export default App;
