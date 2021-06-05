import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.onClickEvent = this.onClickEvent.bind(this);
  }

  onClickEvent(event) {
    console.log(event);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <AddMovie onClick={ this.onClickEvent } />
      </div>
    );
  }
}
