// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

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
    this.changeState = this.changeState.bind(this);
  }

  changeState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  searchMovies() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    let moviesList = movies.filter((item) => ((item.title.includes(searchText))
    || (item.subtitle.includes(searchText))
    || (item.storyline.includes(searchText))));

    if (searchText === '' && selectedGenre !== '') {
      moviesList = movies.filter((item) => (item.genre === selectedGenre));
    }

    if (searchText === '' && selectedGenre === '' && bookmarkedOnly) {
      moviesList = movies.filter((item) => (item.bookmarkedOnly === true));
    }
    return moviesList;
  }

  updateMovies(newState) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newState],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          movies={ movies }
          onSearchTextChange={ this.changeState }
          onBookmarkedChange={ this.changeState }
          onSelectedGenreChange={ this.changeState }
        />
        <AddMovie onClick={ this.updateMovies } />
        <MovieList movies={ this.searchMovies() } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
