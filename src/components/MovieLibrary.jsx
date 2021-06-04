import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.filter = this.filter.bind(this);
  }

  handlerChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: event.target.type === 'checkbox' ? event.target.checked : value,
    }, () => this.filter());
  }

  filter() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;
    const moviesFilter = movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    if (bookmarkedOnly) {
      const moviesFavorites = moviesFilter.filter((movie) => movie.bookmarked === true);
      return this.setState({
        movies: moviesFavorites.filter((movie) => movie.genre.includes(selectedGenre)),
      });
    }
    return this.setState({
      movies: moviesFilter.filter((movie) => movie.genre.includes(selectedGenre)),
    });
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
        <MovieList movies={ movies } />
        <AddMovie />
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
