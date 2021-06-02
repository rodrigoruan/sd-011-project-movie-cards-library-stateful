import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchTextChange } = this.props;

    return (
      <input type="text" onChange={ searchTextChange } />
    );
  }
}

export default SearchBar;
