import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  filterFunctionLibrary = {
    searchTerm: (({ title, subtitle, storyline }, term) => {
      const allText = title + subtitle + storyline;

      return allText.toLowerCase().includes(term.toLowerCase());
    }),
    genre: ((movie, genre) => movie.genre === genre),
    bookmarked: ((movie, bookmarked) => movie.bookmarked === bookmarked),
  };

  filterMovies(movies, filters) {
    const filterObjects = [];

    Object.entries(filters).forEach((filter) => {
      if (filter[1]) {
        filterObjects.push({
          name: filter[0],
          filterFunction: this.filterFunctionLibrary[filter[0]],
        });
      }
    });

    return movies.filter((movie) => (
      filterObjects.reduce((passAll, { name, filterFunction }) => (
        passAll && filterFunction(movie, filters[name])), true)));
  }

  render() {
    const { movies, filters } = this.props;
    const filtMovies = this.filterMovies(movies, filters);

    return (
      <div data-testid="movie-list" className="movie-list">
        { filtMovies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  filters: PropTypes.shape({
    bookmarked: PropTypes.bool.isRequired,
    searchTerm: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieList;
