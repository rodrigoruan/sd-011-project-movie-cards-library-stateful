import React from 'react';
import PropTypes from 'prop-types';
import Label from './Labels/Label';
import GenreSearch from './Labels/GenreSearch';

class SearchBar extends React.Component {
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
      <form data-testid="search-bar-form" className="form-box">
        <Label
          textcall="Inclui o texto:"
          inputName="text"
          value={ searchText }
          handleChange={ onSearchTextChange }
        />
        <label
          htmlFor="checkbox-input"
          data-testid="checkbox-input-label"
          className="label-box"
        >
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            className="label-checkbox"
          />
          Mostrar somente favoritos
        </label>
        <GenreSearch
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
