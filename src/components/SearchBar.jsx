import React from 'react';
import PropTypes from 'prop-types';
import Info from './Info';
import Select from './Select';
import filterOptions from '../DataSecond';

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
      <form data-testid="search-bar-form">
        <Info
          text="Inclui o texto"
          test="text-input"
          name="searchText"
          value={ searchText }
          change={ onSearchTextChange }
        />
        <Info
          text="Mostrar somente favoritos"
          test="checkbox-input"
          name="bookmarkedOnly"
          type="checkbox"
          checked={ bookmarkedOnly }
          change={ onBookmarkedChange }
        />
        <Select
          text="Filtrar por gênero"
          test="select"
          name="selectedGenre"
          value={ selectedGenre }
          change={ onSelectedGenreChange }
          options={ filterOptions }
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
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: {},
  bookmarkedOnly: '',
  onBookmarkedChange: {},
  selectedGenre: '',
  onSelectedGenreChange: {},
};

export default SearchBar;
