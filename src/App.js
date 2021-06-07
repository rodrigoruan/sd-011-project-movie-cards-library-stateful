import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

function onClick() {
  this.state = {
    subtitle: '',
    title: '',
    imagePath: '',
    storyLine: '',
    rating: 0,
    genre: 'action',
  };
}

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie onClick={ onClick } />
    </div>
  );
}

export default App;
