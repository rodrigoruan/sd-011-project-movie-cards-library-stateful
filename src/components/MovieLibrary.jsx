import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.filterTextMovies = this.filterTextMovies.bind(this);
    this.filterBookmark = this.filterBookmark.bind(this);
    this.filterGenre = this.filterGenre.bind(this);
    this.filterMovie = this.filterMovie.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
    this.insertNewMovie = this.insertNewMovie.bind(this);
  }

  handlerChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filterTextMovies(arrayTextMovies) {
    const { searchText } = this.state;
    return arrayTextMovies.filter((movie) => (
      (movie.title.includes(searchText))
      || (movie.subtitle.includes(searchText))
      || (movie.storyline.includes(searchText))));
  }

  filterBookmark(arrayBMovies) {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly === true) {
      const filterBookmark = arrayBMovies.filter((movie) => (movie.bookmarked === true));
      return filterBookmark;
    }
    return arrayBMovies;
  }

  filterGenre(arrayGenreMovies) {
    const { selectedGenre } = this.state;
    const filterGenre = arrayGenreMovies.filter((movie) => (
      (movie.genre.includes(selectedGenre))));
    return filterGenre;
  }

  filterMovie(arrayMovies) {
    const arrayFilteredText = this.filterTextMovies(arrayMovies);
    const arrayFilteredGenre = this.filterGenre(arrayFilteredText);
    const arrayFilteredBookmarked = this.filterBookmark(arrayFilteredGenre);
    return arrayFilteredBookmarked;
  }

  insertNewMovie(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handlerChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handlerChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handlerChange }
        />
        <MovieList movies={ this.filterMovie(movies) } />
        <AddMovie onClick={ this.insertNewMovie } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
