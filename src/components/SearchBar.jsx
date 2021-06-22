import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.component {
    render() {
      const { searchText, onSearchTextChange,
        bookmarkedOnly, onBookmarkedChange, 
        selectedGenre, onSelectedGenreChange } = this.props
      return (
        <form data-testid="search-bar-form">
          
        </form>
      )
    }