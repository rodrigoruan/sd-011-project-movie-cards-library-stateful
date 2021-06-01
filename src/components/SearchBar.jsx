import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';

class SerarchBar extends React.Component {
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
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label">
            Inclui o texto:
            <input
              onChange={ onSearchTextChange }
              data-testid="text-input"
              type="text"
              value={ searchText }
            />
          </label>
          <label htmlFor="checkbox" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              id="checkbox"
              onChange={ onBookmarkedChange }
              checked={ bookmarkedOnly }
              data-testid="checkbox-input"
            />
          </label>
          <Select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          />
        </form>
      </div>
    );
  }
}

SerarchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.string.isRequired,
};

export default SerarchBar;
