import React from 'react';
import PropTypes from 'prop-types';
import SearchBarInputText from './SearchBarFormsInputs/SearchBarInputText';
import SearchBarInputCheckbox from './SearchBarFormsInputs/SerchBarInputCheckbox';
import SearchBarInputSelect from './SearchBarFormsInputs/SearchBarInputSelect';

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
      <form className="search-bar-form" data-testid="search-bar-form">
        <h3>Encontre seu filme:</h3>
        <SearchBarInputText
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
        <SearchBarInputCheckbox
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />
        <SearchBarInputSelect
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
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
