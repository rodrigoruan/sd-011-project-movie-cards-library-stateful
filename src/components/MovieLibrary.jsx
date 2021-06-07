// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
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
  }

  toChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: target.type === 'checkbox' ? target.checked : value,
    }, () => this.toFilter());
  }

  toFilter = () => {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;

    const filteredMovies = movies.filter((movie) => movie.title.includes(searchText) || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText));

    if (bookmarkedOnly === true) {
      const favoriteMovie = filteredMovies.filter((movie) => movie.bookmarked === true);
      return this.setState({
        movies: favoriteMovie.filter((movie) => movie.genre.includes(selectedGenre)),
      });
    }
    return this.setState({
      movies: filteredMovies.filter((movie) => movie.genre.includes(selectedGenre)),
    });
  }

  renderCard = (newMovie) => {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.toChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.toChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.toChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.renderCard } />
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
