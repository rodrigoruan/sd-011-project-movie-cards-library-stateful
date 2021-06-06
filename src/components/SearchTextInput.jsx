import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchTextInput extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="searchText" data-testid="text-input-label">
        Inclui o texto:
        <input
          data-testid="text-input"
          type="text"
          name="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }
}

export default SearchTextInput;

SearchTextInput.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
};

SearchTextInput.defaultProps = {
  searchText: '',
  onSearchTextChange: () => {},
};
