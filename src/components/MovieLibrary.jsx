import React, { Component } from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const movies = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    };
    this.updateBookmarked = this.updateBookmarked.bind(this);
    this.updateGenre = this.updateGenre.bind(this);
    this.updateText = this.updateText.bind(this);
  }

  updateText(event) {
    const { value } = event.target;
    this.setState({
      searchText: value,
    });
  }

  updateBookmarked(event) {
    const { value } = event.target;
    this.setState({
      bookmarkedOnly: value,
    });
  }

  updateGenre(event) {
    const { value } = event.target;
    this.setState({
      selectedGenre: value,
    });
  }

  render() {
    const {
      bookmarkedOnly,
      searchText,
      selectedGenre } = this.state;
    return (
      <SearchBar
        bookmarkedOnly={ bookmarkedOnly }
        searchText={ searchText }
        selectedGenre={ selectedGenre }
        onSearchTextChange={ this.updateText }
        onBookmarkedChange={ this.updateBookmarked }
        onSelectedGenreChange={ this.updateGenre }
      />
    );
  }
}

export default MovieLibrary;
