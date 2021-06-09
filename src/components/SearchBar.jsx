import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      // operador de fragmento
      <>
        <p>SearchBar</p>
        <form data-testid="search-bar-form">
          <input type="text" data-testid="text-input" />
        </form>
      </>
    );
  }
}
export default SearchBar;
