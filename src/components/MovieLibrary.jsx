import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.rendleInput = this.rendleInput.bind(this);
    this.filter = this.filter.bind(this);
  }

  rendleInput({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filteredMovies = movies;
    if (searchText) {
      filteredMovies = movies.filter(({
        title,
        subtitle,
        storyline }) => `${title}${subtitle}${storyline}`.includes(searchText));
    }
    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter(({ bookmarked }) => bookmarked);
    }
    if (selectedGenre) {
      filteredMovies = filteredMovies.filter(({ genre }) => genre === selectedGenre);
    }
    return filteredMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.rendleInput }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.rendleInput }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.rendleInput }
        />
        <MovieList movies={ this.filter() } />
        <AddMovie onClick={ () => {} } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
