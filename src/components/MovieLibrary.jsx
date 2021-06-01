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
    this.handleChange = this.handleChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      // Alberto - Course.
      [name]: target.type === 'checkbox' ? target.checked : value,
    }, () => this.handleFilter());
  }

  handleFilter() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props; // Alberto

    const filteredMovies = movies.filter((movie) => movie.title.includes(searchText) // Tales Coelho
    || movie.subtitle.includes(searchText)
    || movie.storyline.includes(searchText));

    if (bookmarkedOnly === true) {
      const favoriteMovie = filteredMovies.filter((movie) => movie.bookmarked === true);
      return this.setState({
        movies: favoriteMovie.filter((movie) => movie.genre.includes(selectedGenre)),
      });
    }
    return this.setState({
      movies: filteredMovies.filter((movie) => movie.genre.includes(selectedGenre)),
    });
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2>My awesome movie library</h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ (teste) => console.log(teste) } />
      </div>
    );
  }
}
export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
