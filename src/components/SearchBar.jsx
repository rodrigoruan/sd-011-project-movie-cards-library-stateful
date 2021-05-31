import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  inputTextForm(searchText, onSearchTextChange) {
    return (
      <label data-testid="text-input-label" htmlFor="text-input">
        Inclui o texto:
        <input
          onChange={ onSearchTextChange }
          value={ searchText }
          data-testid="text-input"
          type="text"
        />
      </label>
    );
  }

  render() {
    const {
      searchText,
      onSearchTextChange,
    } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          {this.inputTextForm(searchText, onSearchTextChange)}
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBar;
