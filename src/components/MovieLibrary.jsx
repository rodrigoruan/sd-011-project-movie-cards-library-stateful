import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

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

  // Essa função pra usar no SearchBar
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  setMovie(newState) {
    this.setState((previous) => (
      { ...previous, movies: [...previous.movies, newState] }));
  }

  render() {
    const {
      movies, searchText, bookmarkedOnly, selectedGenre,
    } = this.state;
    return (
      <>
        <SearchBar
          onSearchTextChange={ (event) => this.handleChange(event) }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ (event) => this.handleChange(event) }
          onSelectedGenreChange={ (event) => this.handleChange(event) }
          selectedGenre={ selectedGenre }
        />
        <MovieList
          movies={ movies.filter((movie) => (bookmarkedOnly ? movie.bookmarked : true))
            .filter((movie) => (
              selectedGenre === '' ? true : movie.genre === selectedGenre
            ))
            .filter((movie) => movie.title.includes(searchText)
            || movie.subtitle.includes(searchText)
            || movie.storyline.includes(searchText)) }
        />
        <AddMovie onClick={ (e) => this.setMovie(e) } />
      </>
    );
  }
}

MovieLibrary.propTypes = PropTypes.instanceOf(Array).isRequired;
