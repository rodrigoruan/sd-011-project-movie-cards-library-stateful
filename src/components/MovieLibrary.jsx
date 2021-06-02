import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

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
    this.filteredMovies = this.filteredMovies.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onClick = (x) => {
    this.setState((actualMovies) => ({
      movies: [...actualMovies.movies, x],
    }));
  }

  filteredMovies() {
    const { searchText, movies, bookmarkedOnly, selectedGenre } = this.state;

    if (bookmarkedOnly) {
      return movies.filter((movie) => movie.bookmarked);
    }

    if (selectedGenre.length > 0) {
      return movies.filter((movie) => movie.genre.includes(selectedGenre));
    }

    const arrayMovies = movies.filter((movie) => ((movie.title.includes(searchText)))
    || (movie.subtitle.includes(searchText)) || (movie.storyline.includes(searchText)));

    return arrayMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filteredMovies() } />
        <AddMovie onClick={ this.onClick } />
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
