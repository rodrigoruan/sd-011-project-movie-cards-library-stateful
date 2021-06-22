// implement AddMovie component here
import React, { Component } from 'react';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  render() {
    const { movies } = this.props;
    return (
      <div>MyComponent</div>
    );
  }
}
