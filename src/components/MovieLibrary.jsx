import React, { Component } from 'react';

import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.newMovie = this.newMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange(event) {
    const { name } = event.target;
    const valor = event.target.type === 'checkbox' ? event.target.checked
      : event.target.value;
    this.setState({
      [name]: valor,
    });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    let arrayMovies = movies;
    if (searchText) {
      arrayMovies = movies.filter((movie) => (
        movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)
      ));
    }
    if (bookmarkedOnly) {
      arrayMovies = movies.filter((movieOne) => movieOne.bookmarked);
    }
    if (selectedGenre) {
      arrayMovies = movies.filter((movieTwo) => movieTwo.genre.includes(selectedGenre));
    }
    return arrayMovies;
  }

  newMovie(movieData) {
    this.setState((previousState) => ({
      movies: [...previousState.movies, movieData],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const arrayMovies = this.filterMovies();
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSearchTextChange={ this.onSearchTextChange }
          onSelectedGenreChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onSearchTextChange }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList
          movies={ arrayMovies }
        />
        <AddMovie onClick={ (movieData) => this.newMovie(movieData) } />
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
