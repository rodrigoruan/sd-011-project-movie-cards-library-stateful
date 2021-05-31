import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './components/SearchBar';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      srcText: '',
    };
  }

  render() {
    const { movies } = this.props;
    // onSearchTextChange={ } bookmarkedOnly={ } onBookmarkedChange={ } selectedGenre={ } onSelectedGenreChange={ }
    return (
      <>
        <SearchBar searchText={ this.srcText } />
        <div data-testid="movie-list" className="movie-list">
          { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        </div>
      </>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieList;
