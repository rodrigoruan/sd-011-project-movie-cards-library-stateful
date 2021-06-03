import React from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: 'true',
      movies: [],
    };
    async function fetchMovie() {
      this.setState(
        { loading: true },
        async () => {
        const request = movieAPI.getMovies();
        }
      )
    }
  }

  render() {
    const { movies } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieList;
