import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.searchBarHandler = this.searchBarHandler.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onClick(newMovie) {
    const { movies } = this.props;
    const moviesCopy = [...movies];
    moviesCopy.push(newMovie);
    this.setState({
      movies: moviesCopy,
    });
  }

  searchBarHandler(event) {
    const { value, name, checked } = event.target;
    if (name === 'bookmarkedOnly') {
      this.setState({
        [name]: checked,
      });
    }
    this.setState({
      [name]: value,
    });
  }

  filteredMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let arrayFilteredMovies = [];
    arrayFilteredMovies = movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText));
    if (selectedGenre !== '') {
      arrayFilteredMovies = arrayFilteredMovies.filter((movie) => movie.genre
      === selectedGenre);
    }
    if (bookmarkedOnly) {
      arrayFilteredMovies = arrayFilteredMovies.filter((movie) => movie.bookmarked
      === true);
    }
    return arrayFilteredMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.searchBarHandler }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.searchBarHandler }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.searchBarHandler }
        />
        <MovieList movies={ this.filteredMovies() } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieLibrary;
