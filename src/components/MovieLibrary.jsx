import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovies from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.handleState = this.handleState.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: ,
    };
  }

  handleState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar
          searchText={ this.state.searchText }
          onSearchTextChange={ this.handleState }
          bookmarkedOnly={ this.state.bookmarkedOnly }
          onBookmarkedChange={ this.handleState }
          selectedGenre={ this.state.selectedGenre}
          onSelectedGenreChange={ this.handleState }
        />
        <AddMovies />
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
