import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.updateSearchText = this.updateSearchText.bind(this);
    this.updateBookmarked = this.updateBookmarked.bind(this);
    this.updateSeletedGenre = this.updateSeletedGenre.bind(this);
  }

  updateSearchText({ target }) {
    this.setState({ searchText: target.value });
  }

  updateBookmarked({ target }) {
    this.setState({ bookmarkedOnly: target.value });
  }

  updateSeletedGenre({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies: uptadeMovies,
    } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.updateSearchText }
          bookmarked={ bookmarkedOnly }
          onBookmarkedChange={ this.updateBookmarked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.updateSeletedGenre }
        />
        <MovieList movies={ uptadeMovies } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
