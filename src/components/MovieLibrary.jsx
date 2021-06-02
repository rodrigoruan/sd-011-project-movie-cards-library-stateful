// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  onSearchTextChange({ target }) {
    const searchString = target.value;
    const { movies } = this.state;
    let updatedMovies = movies;

    this.setState({ searchText: searchString });

    updatedMovies = movies.filter((movie) => {
      if (
        movie.storyline.toLowerCase().includes(searchString.toLowerCase())
        || movie.title.toLowerCase().includes(searchString.toLowerCase())
        || movie.subtitle.toLowerCase().includes(searchString.toLowerCase())
      ) {
        return movie;
      }
      return false;
    });
    this.setState({ movies: updatedMovies });
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked });
    const { movies } = this.state;
    let updatedMovies = movies;
    const { bookmarkedOnly } = this.state;

    if (!bookmarkedOnly) {
      updatedMovies = movies.filter((movie) => {
        if (movie.bookmarked) {
          return movie;
        }
        return false;
      });
    }
    this.setState({ movies: updatedMovies });
  }

  onSelectedGenreChange({ target }) {
    const { movies } = this.state;
    let updatedMovies = movies;
    this.setState({ selectedGenre: target.value });

    if (target.value !== '') {
      updatedMovies = movies.filter((movie) => {
        if (movie.genre === target.value) {
          return movie;
        }
        return false;
      });
    }
    this.setState({ movies: updatedMovies });
  }

  addMovie({ title, subtitle, imagePath, storyline, rating, genre }) {
    const { movies } = this.state;
    let updatedMovies = movies;
    const obj = { title, subtitle, imagePath, storyline, rating, genre };
    obj.rating = parseFloat(obj.rating);

    updatedMovies = updatedMovies.concat([obj]);
    this.setState({ movies: updatedMovies });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
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
        <MovieList movies={ movies } />
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
