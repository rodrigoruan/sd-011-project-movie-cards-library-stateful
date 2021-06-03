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
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({
      bookmarkedOnly: checked,
    });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    });
  }

  onClick(addNewMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, addNewMovie],
    });
  }

  filteredMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let arrayFilteredMovies = movies.filter((movie) => (
      (movie.title.toLowerCase().includes(searchText))
      || (movie.subtitle.toLowerCase().includes(searchText))
      || (movie.storyline.toLowerCase().includes(searchText))
    ));

    if (bookmarkedOnly) {
      arrayFilteredMovies = arrayFilteredMovies.filter((movie) => (
        movie.bookmarked === true));
    }

    if (selectedGenre !== '') {
      arrayFilteredMovies = arrayFilteredMovies.filter((movie) => (
        movie.genre === selectedGenre
      ));
    }

    return arrayFilteredMovies;
  }

  render() {
    return (
      <>
        <SearchBar
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ this.filteredMovies() }
        />
        <AddMovie onClick={ this.onClick } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ),
};

MovieLibrary.defaultProps = {
  movies: [],
};

export default MovieLibrary;
