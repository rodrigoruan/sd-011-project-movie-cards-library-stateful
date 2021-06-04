// implement AddMovie component here
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
    this.addMovies = this.addMovies.bind(this);
    this.filterSearchBar = this.filterSearchBar.bind(this);
    this.filterChecked = this.filterChecked.bind(this);
  }

  // requisito 17
  filterChecked({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  // Requisito 19
  addMovies(filmes) {
    this.setState((estadoAterior) => ({
      movies: [...estadoAterior.movies, filmes],
    }));
  }

  // requisito 18
  filterSearchBar() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let arrayMovies = movies;
    if (bookmarkedOnly === true) {
      arrayMovies = movies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre !== '') {
      arrayMovies = movies.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText !== '') {
      arrayMovies = movies.filter((movie) => movie
        .title.toLowerCase().includes(searchText)
    || movie.subtitle.toLowerCase().includes(searchText)
    || movie.storyline.toLowerCase().includes(searchText));
    }
    return arrayMovies;
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.filterChecked }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.filterChecked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.filterChecked }
        />
        <MovieList movies={ this.filterSearchBar() } />
        <AddMovie onClick={ this.addMovies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
