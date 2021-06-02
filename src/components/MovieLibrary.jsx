import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };

    this.filterTextMovies = this.filterTextMovies.bind(this);
    this.filterBookmark = this.filterBookmark.bind(this);
    this.filterGenre = this.filterGenre.bind(this);
    this.filterMovie = this.filterMovie.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });

  }

  filterTextMovies(arrayMovies) {
    const { searchText } = this.state;
    const filteredMovies = arrayMovies.filter((movie) => ((movie.title.includes(searchText)) || (movie.subtitle.includes(searchText))));
    return filteredMovies;
  }

  filterBookmark(arrayMovies) {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly === true) {
      arrayMovies.filter((movie) => (movie.bookmarked === true));
    }
    return arrayMovies;
  }

  filterGenre(arrayMovies) {
    const { selectedGenre } = this.state;
    const fileterdGenre = arrayMovies.filter((movie) => (movie.genre.includes(selectedGenre)));
    return fileterdGenre;
  }

  filterMovie(arrayMovies) {
    const arrayFilteredText = this.filterTextMovies(arrayMovies);
    const arrayFilteredGenre = this.filterGenre(arrayFilteredText);
    const arrayFilteredBookmarked = this.filterBookmark(arrayFilteredGenre);
    return arrayFilteredBookmarked;
  }

  render() {
    // const  = this.props;
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
