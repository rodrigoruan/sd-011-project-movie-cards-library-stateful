import React from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import InputCheckbox from './InputCheckbox';
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
        <InputText
          labelText="Inclui o texto"
          dataTestId="text-input"
          name="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
        <InputCheckbox
          labelText="Mostrar somente favoritos"
          dataTestId="checkbox-input"
          name="bookmarkedOnly"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
        <Select
          labelText="Filtrar por gênero"
          labelDataTestId="select-input-label"
          name="selectedGenre"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          selectDataTestId="select-input"
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
