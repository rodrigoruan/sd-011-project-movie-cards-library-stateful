import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-label">
          Inclui o texto:
          <input
            value="searchText"
            type="text"
            onChange="onSearchTextChange"
            data-testid="text-input"
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
