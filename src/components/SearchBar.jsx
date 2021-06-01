import React from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    console.log(searchText)
    return (
      <form action="" data-testid="search-bar-form">
        <label data-testid="text-input-label" > Inclui o texto
          <input data-testid="text-input" type="text" value={searchText} onChange={onSearchTextChange}/>
        </label>
      </form>
    )
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedonly: PropTypes.bool,
  onBookMarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}
