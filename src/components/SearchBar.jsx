import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  // constructor(props) {
  //  super(props);
  // }

  render() {
    const { searchText,
      onSearchTextChange,
      bookMarkedOnly,
      onBookMarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        {searchText}
        {onSearchTextChange}
        {bookMarkedOnly}
        {onBookMarkedChange}
        {selectedGenre}
        {onSelectedGenreChange}
      </div>
    );
  }
}

export default SearchBar;
SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookMarkedOnly: PropTypes.bool,
  onBookMarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;
