import React, { Component } from 'react';
import { string, func } from 'prop-types';

class SearchTextInput extends Component {
  render() {
    const { onSearchTextChange, searchText } = this.props;
    return (
      <label htmlFor="input-for" data-testid="text-input-label">
        Inclui o texto:
        <input
          name="SearchText"
          type="text"
          id="input-for"
          data-testid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }
}

SearchTextInput.propTypes = {
  searchText: string,
  onSearchTextChange: func,
}.isRequired;

export default SearchTextInput;
