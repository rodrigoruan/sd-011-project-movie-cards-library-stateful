import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        searchText: '',
        onSearchTextChange: () => {},
        bookmarkedOnly: false,
        onBookmarkedChange: () => {},
        selectedGenre: '',
        onSelectedGenreChange: () => {},
      },
    };
  }

  render() {
    const { movies } = this.props;
    const { filter } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar filter={ filter } />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  })).isRequired,
};

export default MovieLibrary;
