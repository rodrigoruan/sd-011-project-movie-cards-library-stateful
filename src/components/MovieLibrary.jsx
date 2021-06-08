import React, { Component } from 'react';
import SearchBar from './SearchBar';

// implement AddMovie component here

class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <SearchBar
          searchText="Final Fantasy"
          onSearchTextChange={ () => console.log('Teste ok') }
        />
      </div>
    );
  }
}

export default MovieLibrary;
