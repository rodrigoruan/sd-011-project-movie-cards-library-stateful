// implement AddMovie component here
import React, { Component } from 'react';

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
    let filtered = this.state.movies;

    if (this.state.searchText !== '') {
      const searchToLower = this.state.searchText.toLowerCase();
      filtered = filtered.filter(({ title, subtitle, storyline }) => {
        const filteredTitle = title.toLowerCase().includes(searchToLower);
        const filteredSubtitle = subtitle.toLowerCase().includes(searchToLower);
        const filteredStoryline = storyline
          .toLowerCase()
          .includes(searchToLower);
        return filteredTitle || filteredSubtitle || filteredStoryline;
      });
    }

    if (this.state.bookmarkedOnly) {
      filtered = filtered.filter(({ bookmarked }) => bookmarked === true);
    }

    if (this.state.selectedGenre !== '') {
      filtered = filtered.filter(
        ({ genre }) => genre === this.state.selectedGenre
      );
    }

    return filtered;
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.filteredMovies()} />
        <AddMovie onClick={(newMovie) => this.addMovie(newMovie)} />
      </div>
    );
  }
}

export default MovieLibrary;
