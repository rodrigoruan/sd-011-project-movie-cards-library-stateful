import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    // const {
    //   searchText,
    //   onSearchTextChange,
    //   bookmarkedOnly,
    //   onBookmarkedChange,
    //   selectedGenre,
    //   onSelectedGenreChange,
    // } = this.props;

    return (
      <form>
        <div>
          <label name="search" htmlFor="input-filter">
            Inclui o texto:
            <input type="text" data-testid="text-input" id="input-filter" />
          </label>
        </div>
        <div>
          <label name="favorite" htmlFor="checkbox">
            Mostrar somente favoritos
            <input
              onChange="onBookmarkedChange"
              checked=""
              type="checkbox"
              id="checkbox"
              data-testid="checkbox-input"
            />
          </label>
        </div>
      </form>
    );
  }
}

export default SearchBar;
