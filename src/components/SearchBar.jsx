import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <>
        <p>SearchBar</p>
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label">
            Inclui o texto
            <input id="text-input" type="text" data-testid="text-input" />
          </label>
        </form>
      </>
    );
  }
}
export default SearchBar;
