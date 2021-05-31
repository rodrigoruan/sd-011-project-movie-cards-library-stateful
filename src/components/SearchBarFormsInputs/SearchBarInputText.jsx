import React from 'react';
import PropTypes from 'prop-types';

class SearchBarInputText extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <label htmlFor="search-bar-input-text" data-testid="text-input-label">
        Inclui o texto:
        <input
          id="search-bar-input-text"
          name="searchText"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }
}

SearchBarInputText.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBarInputText;
