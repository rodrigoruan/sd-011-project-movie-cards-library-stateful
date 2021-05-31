import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">"Inclui o texto:"<input value={searchText} onChange={onSearchTextChange} data-testid="text-input" /></label>
      </form>
    );
  }
}

Rating.propTypes = { rating: PropTypes.number };

Rating.defaultProps = {
  rating: 'undefined',
};

export default SearchBar;
