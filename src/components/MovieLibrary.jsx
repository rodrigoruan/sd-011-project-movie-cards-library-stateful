// implement AddMovie component here
import React, { Component } from 'react';
import SearchBar from './SearchBar';
// import PropTypes from 'prop-types';

class MovieLibrary extends Component {
  constructor() {
    super();

    const stateValue = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    };

    this.state = stateValue;

    this.bookmarckedControl = this.bookmarckedControl.bind(this);
    this.searchTextControl = this.searchTextControl.bind(this);
  }

  bookmarckedControl() {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly === true) this.setState({ bookmarkedOnly: false });
    if (bookmarkedOnly === false) this.setState({ bookmarkedOnly: true });
  }

  searchTextControl() {

  }

  render() {
    return (
      <div>
        <SearchBar
          bookmarkedControl={ bookmarckedControl }
          searchText={ this.searchTextControl }
        />
      </div>
    );
  }
}

export default MovieLibrary;
