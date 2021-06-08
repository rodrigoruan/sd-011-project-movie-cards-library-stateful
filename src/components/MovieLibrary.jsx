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

    this.addNewMovie = this.addNewMovie.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    if (bookmarkedOnly) return movies.filter(({ bookmarked }) => bookmarked);
    if (selectedGenre) return movies.filter(({ genre }) => genre === selectedGenre);
    if (searchText) {
      return movies
        .filter(({ title, subtitle, storyline }) => `${title} ${subtitle} ${storyline}`
        .includes(searchText));
    }
    return movies;
  }

  addNewMovie(e) {
    this.setState((previousState) => ({
      movies: [...previousState.movies, e],
    }));
  }

  handleState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSelectedGenreChange={ this.handleState }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.handleState }
          bookmarkedOnly={ bookmarkedOnly }
          onSearchTextChange={ this.handleState }
          searchText={ searchText }
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={ this.addNewMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
