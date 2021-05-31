import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    const { ...props } = this.props;
    return <input { ...props } />;
  }
}

export default SearchBar;
