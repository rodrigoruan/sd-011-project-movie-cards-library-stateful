import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      bookmarkedOnly: false,
      selectedGenre: '',
      searchText: '',
      movies,

    };
    this.handleInput = this.handleInput.bind(this);
    this.filterFilms = this.filterFilms.bind(this);
    this.bookMarkedChange = this.bookMarkedChange.bind(this);
    this.selectGenreMovie = this.selectGenreMovie.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleInput({ target }) {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  filterFilms() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    let result = movies.filter(({ title, subtitle, storyline, genre }) => (
      (title.includes(searchText)
          || subtitle.includes(searchText)
          || storyline.includes(searchText))
          && (selectedGenre === '' || genre === selectedGenre)
    ));
    if (bookmarkedOnly) result = result.filter((movie) => movie.bookmarked);
    return result;
  }

  bookMarkedChange({ target }) {
    const { checked } = target;
    this.setState({
      bookmarkedOnly: checked,
    });
  }

  selectGenreMovie({ target }) {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    });
  }

  addMovie(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { movies } = this.props;

    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;

    const filtered = !movies ? movies : this.filterFilms();

    return (
      <div>
        <h2> My awesome movie library </h2>
        <MovieList movies={ filtered } />
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleInput }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.bookMarkedChange }
          onSelectedGenreChange={ this.selectGenreMovie }
        />
        <AddMovie onClick={ this.addMovie } />

      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default MovieLibrary;
