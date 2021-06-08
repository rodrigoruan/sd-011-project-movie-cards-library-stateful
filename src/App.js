import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

function App() {
  const onClick = () => console.log('Tá on');
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie onClick={ onClick } />
    </div>
  );
}

export default App;
