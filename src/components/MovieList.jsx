import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { dataMovies } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        { dataMovies.map((movie, index) => <MovieCard key={ index } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  dataMovies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieList;
