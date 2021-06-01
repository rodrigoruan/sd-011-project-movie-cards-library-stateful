import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.handleChangeSearchBar = this.handleChangeSearchBar.bind(this);
    this.handleChangeBookmarked = this.handleChangeBookmarked.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.handleNewMovie = this.handleNewMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  handleChangeSearchBar({ target }) {
    const { value } = target;
    if (value != '') {
      const newMovies = this.props.movies.filter((movie) => {
        return (movie.title.includes(value)
        || movie.subtitle.includes(value)
        || movie.storyline.includes(value))
      })
      this.setState({
        searchText: value,
        movies: newMovies
      })
    } else {
      this.setState({
        searchText: value,
        movies:this.props.movies,
      })
    }
  }

  handleChangeBookmarked({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const newMovies = this.props.movies.filter(movie => movie.bookmarked === value)
    this.setState({
      bookmarkedOnly: value,
      movies: newMovies,
    })
  }

  handleGenreChange({ target }) {
    const { value } = target;
    if (value != '') {
      this.setState({
        movies: this.props.movies.filter(movie => movie.genre === value),
        selectedGenre: value
      })
    } else {
      this.setState({
        movies: this.props.movies,
        selectedGenre: value
      })
    }
  }

  handleNewMovie(a) {
    this.setState((currentState) => {
      const newMovie = [...currentState.movies];
      newMovie.push(a)
      return {
        movies: newMovie
      }
    })
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ this.state.searchText }
          onSearchTextChange={ this.handleChangeSearchBar }
          bookmarkedOnly={ this.state.bookmarkedOnly }
          onBookmarkedChange={ this.handleChangeBookmarked }
          selectedGenre={ this.state.selectedGenre }
          onSelectedGenreChange={ this.handleGenreChange }
        />
        <MovieList movies={ this.state.movies } />
        <AddMovie onClick={ this.handleNewMovie } />
      </div>
    );
  }
}

export default MovieLibrary;
