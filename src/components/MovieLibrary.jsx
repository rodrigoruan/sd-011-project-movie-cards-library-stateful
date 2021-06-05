import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovies from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.filterMovie = this.filterMovie.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filterMovie() {
    const { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return movies.filter((film) => film.title.includes(searchText)
      || film.subtitle.includes(searchText)
      || film.storyline.includes(searchText))
      .filter((film) => film.bookmarked || !bookmarkedOnly)
      .filter((film) => selectedGenre === '' || film.genre === selectedGenre);
  }

  render() {
    const resultFilter = this.filterMovie();
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ resultFilter } />
        <AddMovies onClick={ this.AddMovies } />
      </div>
    );
  }
}
export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.string,
}.isRequired;
