// precisa de implementação
// precisa ter estado gerenciável
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

// Req.15
class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    // Req.16
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.changeInfo = this.changeInfo.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  // As funções desenvolvidas entre as linhas 26 e 61 foram elaboradas após estudar o repositório dos colegas @Robson Cardozo, @Samuel Melo e @Teófilo Brandão.
  filteredMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    if (bookmarkedOnly) {
      return movies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre.length !== 0) {
      return movies.filter((items) => items.genre === selectedGenre);
    }

    if (searchText !== '') {
      return movies.filter(
        (movie) => (movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)),
      );
    }
    return movies;
  }

  changeInfo({ target }) {
    const { name } = target;
    let { value } = target;

    if (name === 'bookmarkedOnly') {
      value = (target.checked === true);
    }
    this.setState(() => ({ [name]: value }));
  }

  addMovie(newMovie) {
    this.setState((oldState) => ({
      movies: [...oldState.movies, newMovie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeInfo }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.changeInfo }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.changeInfo }
        />
        <MovieList movies={ this.filteredMovies() } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
