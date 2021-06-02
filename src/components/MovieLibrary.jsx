import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
  }

  onSearchTextChange(e) {
    const { value } = e.target;
    this.setState({
      searchText: value,
    });
    this.setState({
      movies: this.filteredMovies(),
    });
  }

  onBookmarkedChange(e) {
    const { checked } = e.target;

    this.setState({
      bookmarkedOnly: checked,
    }, () => {
      this.setState({
        movies: this.filteredMovies('bookmarked'),
      });
    });
  }

  onSelectedGenreChange(e) {
    const { value } = e.target;
    this.setState({
      selectedGenre: value,
    }, () => {
      this.setState({
        movies: this.filteredMovies('genre'),
      });
    });
  }

  filteredMovies(typeFilter) {
    const { searchText, selectedGenre, bookmarkedOnly, movies } = this.state;
    if (typeFilter === 'genre') {
      return movies.filter((movie) => movie.genre === selectedGenre);
    }
    if (typeFilter === 'bookmarked') {
      return movies.filter((movie) => movie.bookmarked === bookmarkedOnly);
    }
    const arrayMovies = movies.filter((movie) => (
      (movie.title.includes(searchText))
      || (movie.subtitle.includes(searchText))
      || (movie.storyline.includes(searchText))
    ));
    return arrayMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const { resetState } = this.props;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ resetState } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
  resetState: PropTypes.func.isRequired,
};

export default MovieLibrary;
