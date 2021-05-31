import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    /*     const { selectedGenre, onSelectedGenreChange } = this.props; */

    return (
      <div>
        <form data-testid="search-bar-form">
          <fieldset>
            <label htmlFor="text-input" data-testid="text-input-label">
              {' '}
              Inclui o texto:
              <input
                type="text"
                data-testid="text-input"
                value={ searchText }
                onChange={ onSearchTextChange }
              />
            </label>
            <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
              {' '}
              Mostrar somente favoritos
              <input
                type="checkbox"
                data-testid="checkbox-input"
                checked={ bookmarkedOnly }
                onChange={ onBookmarkedChange }
              />
            </label>
          </fieldset>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
/*   selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired, */
};

export default SearchBar;
