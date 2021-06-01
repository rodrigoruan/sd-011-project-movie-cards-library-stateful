import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovies from './AddMovie';
import MovieLIst from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.handleState = this.handleState.bind(this);
    this.moviesFilter = this.moviesFilter.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.moviesFilter(target));
  }

  moviesFilter() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filteredMovie = movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));

    if (bookmarkedOnly) {
      const favoriteMovie = filteredMovie.filter((movie) => movie.bookmarked);
      return this.setState({
        movies: favoriteMovie.filter((movie) => movie.genre.includes(selectedGenre)),
      });
    }
    return this.setState({
      movies: filteredMovie.filter((movie) => movie.genre.includes(selectedGenre)),
    });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleState }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleState }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleState }
        />
        <MovieLIst movies={ movies } />
        <AddMovies />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
