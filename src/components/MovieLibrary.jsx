// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  onSearchTextChange({ target }) {
    const { movies } = this.props;
    const { name, value } = target;
    this.setState(() => ({
      [name]: value,
      movies: movies.filter((movie) => movie.title.includes(value)
      || movie.subtitle.includes(value)
      || movie.storyline.includes(value)),
    }));
  }

  onBookmarkedChange({ target }) {
    const { movies } = this.props;
    const { name, checked } = target;
    this.setState(() => ({
      [name]: checked,
      movies: movies.filter((movie) => {
        if (checked === true) {
          return movie.bookmarked === checked;
        }
        return movies;
      }),
    }));
  }

  onSelectedGenreChange({ target }) {
    const { movies } = this.props;
    const { name, value } = target;
    this.setState(() => ({
      [name]: value,
      movies: movies.filter((movie) => {
        if (value) {
          return movie.genre === value;
        }
        return movies;
      }),
    }));
  }

  addMovie(data) {
    this.setState((currState) => ({
      movies: [...currState.movies, data],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
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
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
