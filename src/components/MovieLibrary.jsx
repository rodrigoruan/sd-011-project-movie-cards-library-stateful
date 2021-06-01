// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { arrayOfMovies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: arrayOfMovies,
    };
    this.newState = this.newState.bind(this);
  }

  misteriousFunction() {

  }

  newState({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState(() => ({
      [name]: value,
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.newState }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.newState }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.newState }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.misteriousFunction } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  arrayOfMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
