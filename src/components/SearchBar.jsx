import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SearchBar extends Component {
  renderTextInput() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto
        <input
          id="text-input"
          type="text"
          data-testid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }

  render() {
    return (
      <>
        <p>SearchBar</p>
        <form data-testid="search-bar-form">
          {this.renderTextInput()}
        </form>
      </>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
}.isRequired;

export default SearchBar;
