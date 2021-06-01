// implement AddMovie component here
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
      movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({
      [name]: value,
    }));
  }

  filterMovies() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;
    if (bookmarkedOnly) return movies.filter((movie) => movie.bookmarked);
    if (selectedGenre.length !== 0) {
      return movies.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText.length !== 0) {
      return movies.filter((movie) => {
        const { title, subtitle, storyline } = movie;
        const booTitle = title.includes(searchText);
        const booSubtitle = subtitle.includes(searchText);
        const booStoryline = storyline.includes(searchText);

        return (
          booTitle || booSubtitle || booStoryline
        );
      });
    }
    return movies;
  }

  addMovie({ subtitle, title, imagePath, storyLine, rating, genre }) {
    const newMovie = {
      subtitle,
      title,
      imagePath,
      storyLine,
      rating,
      genre,
    };
    this.setState((oldState) => ({
      movies: [...oldState.movies, newMovie],
    }));
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
