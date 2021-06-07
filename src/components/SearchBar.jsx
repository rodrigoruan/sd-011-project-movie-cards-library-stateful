// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'enzyme';

class SearchBar extendes Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    const { searchText, 
      onSearchTextChange, 
      bookmarkedOnly, 
      onBookmarkedChange, 
      selectedGenre, 
      onSelectedGenreChange 
    } = this.props;

    return(
      <form data-testid='search-bar-form'>
        <input type='text'></input>
        <select>
          <option></option>
        </select>
      </form>
    )
  }
}

export default SearchBar;