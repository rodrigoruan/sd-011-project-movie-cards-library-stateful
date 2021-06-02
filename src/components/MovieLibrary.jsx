import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      filteredMovies: movies,
      allMovies: movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.insertMovie = this.insertMovie.bind(this);
  }

  onSearchTextChange({ target: { value } }) {
    const { allMovies } = this.state;
    const filtered = allMovies.filter((movie) => (
      movie.title.includes(value)
      || movie.subtitle.includes(value)
      || movie.storyline.includes(value)
    ));
    if (value === '') this.setState({ searchText: '', filteredMovies: allMovies });
    else {
      this.setState({
        searchText: value,
        filteredMovies: filtered,
      });
    }
  }

  onBookmarkedChange({ target: { checked } }) {
    const { allMovies } = this.state;
    const filtered = allMovies.filter((movie) => (movie.bookmarked));

    if (checked) this.setState({ bookmarkedOnly: true, filteredMovies: filtered });
    else this.setState({ bookmarkedOnly: false, filteredMovies: allMovies });
  }

  onSelectedGenreChange({ target: { value } }) {
    const { allMovies } = this.state;
    const filtered = allMovies.filter((movie) => (movie.genre === value));
    if (value === '') this.setState({ selectedGenre: '', filteredMovies: allMovies });
    else this.setState({ selectedGenre: value, filteredMovies: filtered });
  }

  insertMovie(data) {
    this.setState(({ allMovies }) => ({
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      filteredMovies: [...allMovies, data],
      allMovies: [...allMovies, data],
    }));
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      filteredMovies,
    } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ filteredMovies } />
        <AddMovie onClick={ this.insertMovie } />
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
