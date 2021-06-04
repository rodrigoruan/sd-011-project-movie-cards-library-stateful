import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.handlerChange = this.handlerChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handlerChange({ target }) {
    const { type } = target;

    switch (type) {
    case 'text':
      this.setState({
        searchText: target.value,
      });
      break;

    case 'checkbox':
      this.setState({
        bookmarkedOnly: target.checked,
      });
      break;

    default:
      this.setState({
        selectedGenre: target.value,
      });
      break;
    }
  }

  filterMovies() {
    const { searchText, selectedGenre, bookmarkedOnly, movies } = this.state;

    let filteredMovies = movies;

    if (bookmarkedOnly === true) {
      filteredMovies = filteredMovies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      filteredMovies = filteredMovies.filter((movie) => movie.genre === selectedGenre);
    }

    if (searchText !== '') {
      filteredMovies = filteredMovies.filter((movie) => movie.title
        .toLowerCase().includes(searchText)
        || movie.subtitle.toLowerCase().includes(searchText)
        || movie.storyline.toLowerCase().includes(searchText));
    }

    return filteredMovies;
  }

  addMovie(newMovie) {
    this.setState((beforeState) => ({
      movies: [...beforeState.movies, newMovie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handlerChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handlerChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handlerChange }
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={ (newMovie) => this.addMovie(newMovie) } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieLibrary.defaultProps = {
  movies: [{}],
};

export default MovieLibrary;
