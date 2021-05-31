import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.addMovies = this.addMovies.bind(this);
  }
  addMovies(movie) {
    this.setState((estadoAnterior, props) => ({
      movies: props.movies,
    }))
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ this.state.searchText }
          bookmarkedOnly={ this.state.bookmarkedOnly }
          selectedGenre={ this.state.selectedGenre }
        />
        <AddMovie onClick={ this.addMovies } />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};

export default MovieLibrary;
