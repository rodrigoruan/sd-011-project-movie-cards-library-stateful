import React, { Component } from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

export default class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}
