import React from 'react';

class SearchBar extends React.Component {
  renderTextInput() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="search" data-testid="text-input-label">
        Inclui o texto:
        <input
          id="search"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        {this.renderTextInput()}
      </form>
    );
  }
}

export default SearchBar;
