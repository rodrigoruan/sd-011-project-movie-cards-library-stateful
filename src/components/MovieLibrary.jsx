import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.handleGeneric = this.handleGeneric.bind(this);
    this.addMovies = this.addMovies.bind(this);
  }

  handleGeneric({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  addMovies(movie) {
    this.setState((previous) => ({
      movies: [...previous.movies, movie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2>Movie library</h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleGeneric }
          onBookmarkedChange={ this.handleGeneric }
          onSelectedGenreChange={ this.handleGeneric }
        />
        <div>
          <MovieList movies={ movies } />
        </div>
        <div>
          <AddMovie onClick={ this.addMovies } />
        </div>
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
