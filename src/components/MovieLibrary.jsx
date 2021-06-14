// implement AddMovie component here
import React, { Component } from 'react';
import SearchBar from './SearchBar';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: 'false',
      selectedGenre: '',
    };

    this.updateSearchText = this.updateSearchText.bind(this);
    this.updateBookmarked = this.updateBookmarked.bind(this);
    this.updateSeletedGenre = this.updateSeletedGenre.bind(this);
  }

  updateSearchText({ target }) {
    this.setState({ searchText: target.value });
  }

  updateBookmarked({ target }) {
    this.setState({ bookmarkedOnly: target.value });
  }

  updateSeletedGenre({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <SearchBar
        searchText={ searchText }
        onSearchTextChange={ this.updateSearchText }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ this.updateBookmarked }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ this.updateSeletedGenre }
      />
    );
  }
}
