import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <Input
          labelText="Inclui o texto"
          labelDataTestId="text-input-label"
          inputType="text"
          inputName="searchText"
          inputValue={ searchText }
          inputOnChange={ onSearchTextChange }
          inputDataTestId="text-input"
        />
        <Input
          labelText="Mostrar somente favoritos"
          labelDataTestId="checkbox-input-label"
          inputType="checkbox"
          inputName="bookmarkedOnly"
          inputChecked={ bookmarkedOnly }
          inputOnChange={ onBookmarkedChange }
          inputDataTestId="checkbox-input"
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
};

export default SearchBar;
