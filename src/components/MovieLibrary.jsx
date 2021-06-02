import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    // const { movies } = this.props;
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
  }

  handlerChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filterTextMovies(arrayMovies) {
    const { searchText } = this.state;
    return arrayMovies.filter((movie) => (
      (movie.title.includes(searchText))
      || (movie.subtitle.includes(searchText))
      || (movie.storyline.includes(searchText))));
  }

  filterBookmark(arrayMovies) {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly === true) {
      const filteredBookmark = arrayMovies.filter((movie) => (movie.bookmarked === true));
      return filteredBookmark;
    }
    return arrayMovies;
  }

  filterGenre(arrayMovies) {
    const { selectedGenre } = this.state;
    const filterGenre = arrayMovies.filter((movie) => (
      (movie.genre.includes(selectedGenre))));
    return filterGenre;
  }

  filterMovie(arrayMovies) {
    const arrayFilteredText = this.filterTextMovies(arrayMovies);
    const arrayFilteredGenre = this.filterGenre(arrayFilteredText);
    const arrayFilteredBookmarked = this.filterBookmark(arrayFilteredGenre);
    return arrayFilteredBookmarked;
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
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
