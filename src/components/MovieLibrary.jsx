import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      boomarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.checked = this.checked.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  checked({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  addMovie(movie) {
    this.setState((previousState) => ({
      movies: [...previousState.movies, movie],
    }));
  }

  render() {
    const { searchText, boomarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.checked }
          boomarkedOnly={ boomarkedOnly }
          onBookmarkedChange={ this.checked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.checked }
        />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
