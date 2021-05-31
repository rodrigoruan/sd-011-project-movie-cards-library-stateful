import React from 'react';
import PropTypes from 'prop-types';
import GenderSelect from './GenderSelect';
import CheckboxFavorite from './CheckboxFavorite';
import InputText from './InputText';
import AddMovie from './AddMovie';

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
      <div>
        <form data-testid="search-bar-form">
          <InputText
            searchText={ searchText }
            onSearchTextChange={ onSearchTextChange }
          />

          <br />

          <CheckboxFavorite
            bookmarkedOnly={ bookmarkedOnly }
            onBookmarkedChange={ onBookmarkedChange }
            searchText={ searchText }
          />

          <br />

          <GenderSelect
            selectedGenre={ selectedGenre }
            onSelectedGenreChange={ onSelectedGenreChange }
          />

        </form>
        <AddMovie />
      </div>
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
