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
    this.renderMovie = this.renderMovie.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleFilter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filtered = movies;

    if (searchText) {
      filtered = movies
        .filter(({ title, subtitle, storyline }) => `${title} ${subtitle} ${storyline}`
          .includes(searchText));
    }

    if (bookmarkedOnly) {
      filtered = movies
        .filter(({ bookmarked }) => bookmarked);
    }

    if (selectedGenre) {
      filtered = movies.filter(({ genre }) => genre === selectedGenre);
    }

    return filtered;
  }

  renderMovie(movie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.handleFilter() } />
        <AddMovie onClick={ this.renderMovie } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
