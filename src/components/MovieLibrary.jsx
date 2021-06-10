// implement AddMovie component here

// 15 - Crie um componente chamado <MovieLibrary />
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

// 16 - Configure o estado inicial do componente MovieLibray
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
    this.renderCardMovie = this.renderCardMovie.bind(this);
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

  renderCardMovie(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  // 18 - Renderize <MovieList /> dentro de <MovieLibrary />
  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2>My awesome movie library</h2>

        {/* // 17 - Renderize <SearchBar /> dentro de <MovieLibrary /> */}
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />

        {/* 18 - Renderize <MovieList /> dentro de <MovieLibrary /> */}
        <MovieList movies={ movies } />

        {/* 19 - Renderize <AddMovie /> dentro de <MovieLibrary /> */}
        <AddMovie onClick={ this.renderCardMovie } />
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
