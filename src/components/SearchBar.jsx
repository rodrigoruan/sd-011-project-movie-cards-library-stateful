import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <fieldset>
            <label htmlFor="text-input" data-testid="text-input-label">
              Inclui o texto:
              <input
                type="text"
                data-testid="text-input"
                value={ searchText }
                onChange={ onSearchTextChange }
              />
            </label>
          </fieldset>
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
