import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import filterOptions from '../data2';

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
        <Input
          text="Inclui o texto"
          test="text-input"
          name="searchText"
          value={ searchText }
          change={ onSearchTextChange }
        />
        <Input
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
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
