import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies,
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.addMovieOnClick = this.addMovieOnClick.bind(this);
    this.filterSearchText = this.filterSearchText.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  addMovieOnClick(movie) {
    this.setState((initialState) => ({
      movies: [...initialState.movies, movie],
    }));
  }

  filterSearchText() {
    const { bookmarkedOnly, searchText, selectedGenre, movies } = this.state;
    let save = movies;
    if (bookmarkedOnly === true) {
      save = movies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre !== '') {
      save = movies.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText !== '') {
      save = movies.filter((movie) => movie.title.toLowerCase().includes(searchText)
        || movie.subtitle.toLowerCase().includes(searchText)
        || movie.storyline.toLowerCase().includes(searchText));
    }
    return save;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filterSearchText() } />
        <AddMovie onClick={ this.addMovieOnClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf,
};

MovieLibrary.defaultProps = {
  movies: {},
};

export default MovieLibrary;
