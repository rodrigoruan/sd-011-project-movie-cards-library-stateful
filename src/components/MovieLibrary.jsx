// implement AddMovie component here
import React, { Component } from 'react';
import SearchBar from './SearchBar';

const initialState = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
}

export default class MovieLibrary extends Component {
  constructor() {
    super();
    
    this.state = initialState;
  }

  render() {
    const { movies } = this.props;

    return (
      <div>
        <SearchBar /> 
      </div>
    );
  }
}