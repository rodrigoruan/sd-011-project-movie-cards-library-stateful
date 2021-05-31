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
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleAddMovie(data) {
    const param = {
      target: {
        value: '',
      },
    };
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      genre,
    } = data;
    const rating = parseInt(data.rating, 10);
    this.setState(({ allMovies }) => ({
      allMovies: [...allMovies, {
        title,
        subtitle,
        storyline,
        rating,
        imagePath,
        bookmarked: false,
        genre,
      }],
    }), () => this.onSelectedGenreChange(param));
  }

  onSearchTextChange({ target: { value } }) {
    const { allMovies } = this.state;
    const filtered = allMovies.filter((movie) => (
      movie.title.includes(value)
      || movie.subtitle.includes(value)
      || movie.storyline.includes(value)
    ));
    this.setState({
      searchText: value,
      filteredMovies: filtered,
    });
  }

  onBookmarkedChange() {
    const { allMovies, bookmarkedOnly } = this.state;
    const filtered = allMovies.filter((movie) => (movie.bookmarked));
    if (bookmarkedOnly) {
      this.setState({ bookmarkedOnly: false, filteredMovies: allMovies });
    } else {
      this.setState({ bookmarkedOnly: true, filteredMovies: filtered });
    }
  }

  onSelectedGenreChange({ target: { value } }) {
    const { allMovies } = this.state;
    const filtered = allMovies.filter((movie) => (movie.genre === value));
    if (value === '') this.setState({ selectedGenre: '', filteredMovies: allMovies });
    else this.setState({ selectedGenre: value, filteredMovies: filtered });
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
        <AddMovie onClick={ this.handleAddMovie } />
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
