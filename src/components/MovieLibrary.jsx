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

    this.filter = this.filter.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.filter(target));
  }

  /* Filter e includes da primeira verificação resolvido com a ajuda do Tales Coelho */
  filter(target) {
    const { name, value } = target;
    const { movies } = this.props;
    const { bookmarkedOnly } = this.state;
    let result = movies;
    if (name === 'searchText') {
      result = movies.filter((movie) => movie.title.includes(value)
      || movie.subtitle.includes(value) || movie.storyline.includes(value));
    }
    if (name === 'selectedGenre') {
      result = result.filter((movie) => movie.genre.includes(value));
    }
    if (bookmarkedOnly === true) {
      result = movies.filter((movie) => movie.bookmarked === true);
    }
    this.setState({
      [name]: value,
      movies: result,
    });
  }

  /* Função newMovie resolvida com a ajuda do Victor Santiago */
  newMovie(addMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, addMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies: movie } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onBookmarkedChange={ this.handleChange }
          onSearchTextChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ movie } />
        <AddMovie onClick={ this.newMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
