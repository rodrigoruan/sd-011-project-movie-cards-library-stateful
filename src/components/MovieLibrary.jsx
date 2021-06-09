import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
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
    this.handlerChange = this.handlerChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.renderMovies = this.renderMovies.bind(this);
  }
  /* Para realizar essa função foi necessario ajuda do plantão e de colegas da turma */

  handlerChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.filterMovies(target));
  }

  /* Realizado consulta no plantão de estudo e colegas para realizar a função filterMovies} */
  filterMovies(target) {
    const { name, value } = target;
    const { movies } = this.state;
    const { bookmarkedOnly } = this.state;
    let results = movies;
    if (name === 'searchText') {
      results = movies.filter((movie) => movie.title
        .includes(value)
        || movie.subtitle
          .includes(value)
        || movie.storyLine
          .includes(value));
    }
    if (bookmarkedOnly) {
      results = results.filter(({ bookmarked }) => bookmarked);
    }
    if (name === 'selectedGenre') {
      results = results.filter(({ genre }) => genre.includes(value));
    }
    this.setState({
      [name]: value,
      movies: results,
    });
  }

  renderMovies(addMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, addMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies: movie } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.handlerChange }
          onSearchTextChange={ this.handlerChange }
          onSelectedGenreChange={ this.handlerChange }
        />
        <MovieList movies={ movie } />
        <AddMovie onClick={ this.renderMovies } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
