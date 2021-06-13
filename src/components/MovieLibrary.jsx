import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.filtered = this.filtered.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  filtered() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let object = movies;
    if (bookmarkedOnly) object = movies.filter(({ bookmarked }) => bookmarked === true);
    if (selectedGenre) {
      object = movies.filter(({ genre }) => genre.includes(selectedGenre));
    }
    if (searchText) {
      object = movies
        .filter(({ title, subtitle, storyline }) => title.includes(searchText)
      || subtitle.includes(searchText) || storyline.includes(searchText));
    }
    return object;
  }

  addMovie(newMovie) {
    const { movies } = this.state;

    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleInputChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleInputChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleInputChange }
        />
        <MovieList movies={ this.filtered() } />
        <AddMovie onClick={ this.addMovie } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieLibrary;
