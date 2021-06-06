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
      movies: props.movies, // filmes filtrados
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this); // callbacks que alteram state
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
  }

  onSearchTextChange(event) {
    const { target } = event;
    this.setState({
      searchText: target.value,
    });
  }

  onBookmarkedChange(event) {
    const { target } = event;
    this.setState({
      bookmarkedOnly: target.checked,
    });
  }

  onSelectedGenreChange(event) {
    const { target } = event;
    this.setState({
      selectedGenre: target.value,
    });
  }

  searchMovies() { // função unica para filtrar
    const { bookmarkedOnly, selectedGenre, searchText, movies } = this.state; // para acessar os valores para conseguir filtrar
    let researchedMovies = movies;

    if (bookmarkedOnly === true) {
      researchedMovies = researchedMovies
        .filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      researchedMovies = researchedMovies
        .filter((movie) => movie.genre === selectedGenre);
    }

    if (searchText !== '') {
      researchedMovies = researchedMovies
        .filter((movie) => (movie.title.includes(searchText))
      || (movie.subtitle.includes(searchText))
      || (movie.storyline.includes(searchText)));
    }

    return researchedMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ this.searchMovies() } />
        <AddMovie />
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
