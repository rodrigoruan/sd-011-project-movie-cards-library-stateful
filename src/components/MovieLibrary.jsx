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
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleFilterInput = this.handleFilterInput.bind(this);
    this.handleStateMovie = this.handleStateMovie.bind(this);
  }

// for the req 18 I consulted Bruno's repository
// https://github.com/tryber/sd-011-project-movie-cards-library-stateful/blob/brunoarduarte-movie-cards-library-stateful/src/components/MovieLibrary.jsx

  handleChangeInput({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    console.log(this.state)
  }

  handleFilterInput() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filtered = movies;

    if (searchText) {
      filtered = movies
        .filter((movie) => movie.title.includes(searchText) 
            || movie.subtitle.includes(searchText)
            || movie.storyline.includes(searchText))
    }

    if (bookmarkedOnly) {
      filtered = movies.filter((movie) => movie.bookmarked);
    }

    if (selectedGenre) {
      filtered = movies.filter((movie) => movie.genre === selectedGenre);
    }

    return filtered;
  }

  handleStateMovie(movie) {
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
          onSearchTextChange={ this.handleChangeInput }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChangeInput }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChangeInput }
        />
        <AddMovie onClick={ this.renderMovie } />
        <MovieList movies={ this.handleFilterInput() } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
