import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

class App extends Component {
  aoClicar(state) {
    console.log('filme adicionado');
    console.log(state);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <AddMovie onClick={ this.aoClicar } />
      </div>
    );
  }
}

export default App;
