// implement AddMovie component here
import React, { Component } from 'react';
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
      movies: this.props.movies,
    }

    this.handlerChanges = this.handlerChanges.bind(this);
    this.handlerGenres = this.handlerGenres.bind(this);
  }

  handlerChanges({ target }) {
    const { name, value } = target;

    this.setState(() => ({
      [name]: value,
    }));
    this.handleFilters();
  }

  handlerGenres({ target }) {
    const { value } = target;
    const filteredMovies = this.props.movies.filter((movie) => movie.genre === this.state.selectedGenre);

    if (this.props.selectedGenre !== '') {
      this.setState({
        selectedGenre: value,
        movies: filteredMovies,
      })
    } 
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.handlerChanges}
          onSelectedGenreChange={this.handlerGenres}
        />
        <MovieList
          movies={this.state.movies}
        />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
