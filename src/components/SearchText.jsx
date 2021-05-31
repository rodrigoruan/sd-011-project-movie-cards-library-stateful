import React, { Component } from 'react';

class SearchText extends Component {
  render() {
    const { text } = this.props;
    return (
      <label htmlFor="search-text" data-testid="text-input-label">
        Inclui o texto:
        <input type="text" name="search-text" data-testid="text-input" value={ text } />
      </label>
    );
  }
}

export default SearchText;
