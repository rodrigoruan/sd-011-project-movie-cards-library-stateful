import React, { Component } from 'react';
import { arrayOf, object } from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
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
    this.addMovieFunction = this.addMovieFunction.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly === false) {
      this.setState({ bookmarkedOnly: true });
    } else {
      this.setState({ bookmarkedOnly: false });
    }
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  filterMovies() {
    const { selectedGenre, searchText, bookmarkedOnly, movies } = this.state;

    if (searchText !== '') {
      return movies.filter(({ title, subtitle, storyline }) => title.includes(searchText)
    || subtitle.includes(searchText)
    || storyline.includes(searchText));
    }

    if (bookmarkedOnly) {
      console.log(bookmarkedOnly);
      return movies.filter((eachMovie) => eachMovie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      return movies.filter((eachMovie) => eachMovie.genre === selectedGenre);
    }
    return movies;
  }

  addMovieFunction(newMovie) {
    this.setState((actualState) => ({ movies: [...actualState.movies, newMovie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={ this.addMovieFunction } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: arrayOf(object),
}.isRequired;

export default MovieLibrary;
