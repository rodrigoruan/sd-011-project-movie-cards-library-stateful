// implement AddMovie component here !
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <h2>My awesome movie library</h2>
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}
