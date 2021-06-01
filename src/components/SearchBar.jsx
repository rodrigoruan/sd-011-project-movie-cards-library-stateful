/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBarInput from './SearchBarInput';
import SearchBarCheckBox from './SearchBarCheckBox';
import SearchBarSelected from './SearchBarSelected';

export default class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <SearchBarInput value={ searchText } value2={ onSearchTextChange } />
        <SearchBarCheckBox value={ onBookmarkedChange } value2={ bookmarkedOnly } />
        <SearchBarSelected value={ selectedGenre } value2={ onSelectedGenreChange } />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onSelectedGenreChange: PropTypes.string.isRequired,
};
