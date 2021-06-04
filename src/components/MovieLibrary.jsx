import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleBookmarkedOnly = this.handleBookmarkedOnly.bind(this);
    this.handleSelectedGenre = this.handleSelectedGenre.bind(this);
  }

  handleSearchText({ target }) {
    const { value } = target;

    this.setState({
      searchText: value,
    });
  }

  handleBookmarkedOnly({ target }) {
    const { checked } = target;

    this.setState({
      bookmarkedOnly: checked,
    });
  }

  handleSelectedGenre({ target }) {
    const { value } = target;

    this.setState({
      selectedGenre: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelectedGenre }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
