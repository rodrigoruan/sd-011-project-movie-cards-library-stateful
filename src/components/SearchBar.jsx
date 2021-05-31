import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

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
      <div>
        <section>
          <form data-testid="search-bar-form">
            <label data-testid="text-input-label" htmlFor="searchText">
              Inclui o texto:
              <input
                id="searchText"
                type="text"
                value={ searchText }
                onChange={ onSearchTextChange }
                data-testid="text-input"
              />
            </label>
          </form>
        </section>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.string,
};
