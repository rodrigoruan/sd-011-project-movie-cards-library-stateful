import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
    this.updateBookmarked = this.updateBookmarked.bind(this);
    this.updateGenre = this.updateGenre.bind(this);
    this.updateText = this.updateText.bind(this);
    this.filteringMovies = this.filteringMovies.bind(this);
  }

  filteringMovies() {
    const { movies } = this.props;
    console.log(movies);
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;

    let filtered = [];

    if (!bookmarkedOnly && selectedGenre === '' && searchText === '') {
      return movies;
    }
    if (bookmarkedOnly) {
      filtered = movies
        .filter((movie) => (movie.bookmarked === true));
    }
    if (searchText !== '') {
      const searchLowerCase = searchText.toLowerCase();
      filtered = movies
        .filter((movie) => movie.title.toLowerCase().includes(searchLowerCase)
      || movie.subtitle.toLowerCase().includes(searchLowerCase)
      || movie.storyline.toLowerCase().includes(searchLowerCase));
    }
    if (selectedGenre !== '') {
      filtered = movies
        .filter((movie) => movie.genre === selectedGenre);
    }

    return filtered;
  }

  updateText(event) {
    const { value } = event.target;
    this.setState({
      searchText: value,
    });
    this.filteringMovies();
  }

  updateBookmarked(event) {
    const { checked } = event.target;
    this.setState({
      bookmarkedOnly: checked,
    });
    this.filteringMovies();
  }

  updateGenre(event) {
    const { value } = event.target;
    this.setState({
      selectedGenre: value,
    });
    this.filteringMovies();
  }

  render() {
    const {
      bookmarkedOnly,
      searchText,
      selectedGenre,
    } = this.state;
    return (
      <div>
        <SearchBar
          bookmarkedOnly={ bookmarkedOnly }
          searchText={ searchText }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.updateText }
          onBookmarkedChange={ this.updateBookmarked }
          onSelectedGenreChange={ this.updateGenre }
        />
        <MovieList movies={ this.filteringMovies() } />
      </div>
    );
  }
}

MovieLibrary.defaultProps = {
  movies: [],
};

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieLibrary;
