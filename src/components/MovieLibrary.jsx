import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
// import Data from '../data';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.addCardMovie = this.addCardMovie.bind(this);
    this.filterArrMovies = this.filterArrMovies.bind(this);
  }

  async handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: target.type === 'checkbox' ? target.checked : value,
      movies: this.filterArrMovies(target),
    });
  }

  filterArrMovies(target) {
    const { searchText } = this.state;
    const { movies } = this.props;
    let newArrMovies = movies;
    if (target.checked) {
      newArrMovies = newArrMovies
        .filter((movie) => movie.bookmarked === true);
    }
    if (searchText !== '') {
      newArrMovies = newArrMovies
        .filter((movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText));
    }
    if (target.name === 'selectedGenre' && target.value !== '') {
      newArrMovies = newArrMovies
        .filter((movie) => movie.genre === target.value);
    }
    return newArrMovies;
  }

  addCardMovie(objNewMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, objNewMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addCardMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
