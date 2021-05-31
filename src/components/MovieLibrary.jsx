// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const initialState = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.state = initialState;

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  onSearchTextChange({ target }) {
    const { value } = target;

    this.setState({
      searchText: value,
    });
  }

  onBookmarkedChange() {
    this.setState((previousState) => ({
      bookmarkedOnly: !previousState.bookmarkedOnly,
    }));
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;

    this.setState({
      selectedGenre: value,
    });
  }

  addMovie(newState) {
    this.setState((previousState) => ({
      movies: [...previousState.movies, newState],
    }));
  }

  filteredMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    let filtered = movies;

    if (searchText !== '') {
      const searchToLower = searchText.toLowerCase();
      filtered = filtered.filter(({ title, subtitle, storyline }) => {
        const filteredTitle = title.toLowerCase().includes(searchToLower);
        const filteredSubtitle = subtitle.toLowerCase().includes(searchToLower);
        const filteredStoryline = storyline
          .toLowerCase()
          .includes(searchToLower);
        return filteredTitle || filteredSubtitle || filteredStoryline;
      });
    }

    if (bookmarkedOnly) {
      filtered = filtered.filter(({ bookmarked }) => bookmarked === true);
    }

    if (selectedGenre !== '') {
      filtered = filtered.filter(
        ({ genre }) => genre === selectedGenre,
      );
    }

    return filtered;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ this.filteredMovies() } />
        <AddMovie onClick={ (newMovie) => this.addMovie(newMovie) } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
