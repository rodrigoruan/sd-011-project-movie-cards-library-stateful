import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      movies,
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };

    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAddMovie(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  handleChange({ target: { name, value, type, checked } }) {
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  }

  filterAddMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const result = movies.filter(({ title, subtitle, storyline, genre }) => (
      (title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText))
        && (selectedGenre === '' || genre === selectedGenre)
    ));
    // eslint-disable-next-line no-const-assign
    if (bookmarkedOnly) result = result.filter((movie) => movie.bookmarked);
    return result;
  }

  render() {
    const filtered = this.filterAddMovies();
    return (
      <>
        {}
        <p>Movie Library</p>
        <SearchBar
          onSelectedGenreChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSearchTextChange={ this.handleChange }
        />
        <MovieList movies={ filtered } />
        <AddMovie onCLick={ this.handleAddMovie } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
