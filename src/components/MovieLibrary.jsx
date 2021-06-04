import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleBookmarkedOnly = this.handleBookmarkedOnly.bind(this);
    this.handleSelectedGenre = this.handleSelectedGenre.bind(this);
    /* this.filteredMovies = this.filteredMovies(bind); */
  }

  handleSearchText({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  handleBookmarkedOnly({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
  }

  handleSelectedGenre({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  handleAddMovies(newMovie) {
    this.setState((previousState) => ({
      movies: [...previousState.movies, newMovie],
    }));
  }

  /*  filteredMovies() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    const arrayMovies = movies.filter((movie) => (
      (bookmarkedOnly === false ? true : movie.bookmarked === true)
      && (movie.genre.includes(selectedGenre))
      && (
        (movie.title.includes(searchText))
        || (movie.subtitle.includes(searchText))
        || (movie.storyline.includes(searchText)))));
    return arrayMovies;
  } */

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelectedGenre }
        />
        <MovieList
          movies={ movies.filter((movie) => (
            (bookmarkedOnly === false ? true : movie.bookmarked === true)
            && (movie.genre.includes(selectedGenre))
            && (
              (movie.title.includes(searchText))
              || (movie.subtitle.includes(searchText))
              || (movie.storyline.includes(searchText))))) }
        />
        <AddMovie onClick={ (newMovie) => this.handleAddMovies(newMovie) } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
