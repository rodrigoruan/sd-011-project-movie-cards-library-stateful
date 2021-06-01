import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.filterMovies = this.filterMovies.bind(this);
    this.searchInfo = this.searchInfo.bind(this);
    this.addMovie = this.addMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    if (bookmarkedOnly) {
      return movies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      return movies.filter((movie) => movie.genre === selectedGenre);
    }

    if (searchText !== '') {
      return movies.filter((movie) => (movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)
      ));
    }

    return movies;
  }

  searchInfo({ target }) {
    const { name } = target;
    let { value } = target;

    if (name === 'bookmarkedOnly') {
      value = (target.checked === true);
    }

    this.setState({
      [name]: value,
    });
  }

  addMovie(importMovie) {
    this.setState((previusState) => ({
      movies: [...previusState.movies, importMovie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.searchInfo }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.searchInfo }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.searchInfo }
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
