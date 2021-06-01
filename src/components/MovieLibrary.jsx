import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleChange = ({ target }) => { // Albertto da turma 11 me ajudou nessa!
    const { name, value } = target;
    this.setState({
      [name]: target.type === 'checkbox' ? target.checked : value,
    }, () => this.handleFilter());
  }

  handleFilter = () => {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;

    const filteredMovies = movies.filter((movie) => movie.title.includes(searchText)
    || movie.subtitle.includes(searchText)
    || movie.storyline.includes(searchText));

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

  RenderCard = (newMovie) => {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie], // Victor Santiago me ajudou nessa!
    });
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2>My awesome movie library</h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.RenderCard } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
