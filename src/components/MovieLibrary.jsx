import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props,

    };
    this.handlerChange = this.handlerChange.bind(this.props);
    this.filterMovies = this.filterMovies.bind(this.props);
    this.renderMovies = this.renderMovies.bind(this.props);
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
  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let results = movies;
    if (searchText) {
      results = movies.filter(({
        title,
        subtitle,
        storyline }) => `${title}${subtitle}${storyline}`.includes(searchText));
    }
    if (bookmarkedOnly) {
      results = results.filter(({ bookmarked }) => bookmarked);
    }
    if (selectedGenre) {
      results = results.filter(({ genre }) => genre === selectedGenre);
    }
    return results;
  }

  renderMovies(addMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, addMovie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies: movie } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.inputSearch }
          onSearchTextChange={ this.inputSearch }
          onSelectedGenreChange={ this.inputSearch }
        />
        <MovieList movies={ movie } />
        <AddMovie onClick={ this.renderMovies } />
      </section>
    );
  }
}

MovieLibrary.propType = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
