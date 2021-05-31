import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import { SearchBar } from './SearchBar';
import { AddMovie } from './AddMovie';

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

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSelectedGenreChange={ this.changeState }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.changeState }
          bookmarkedOnly={ bookmarkedOnly }
          onSearchTextChange={ this.changeState }
          searchText={ searchText }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
