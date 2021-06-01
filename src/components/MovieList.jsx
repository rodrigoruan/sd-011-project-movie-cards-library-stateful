import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  filterMovies(movies, filters) {
    const filterFunctionLibrary = {
      searchTerm: (({ title, subtitle, storyline }, term) => {
        const allText = title + subtitle + storyline;

        return allText.toLowerCase().includes(term.toLowerCase());
      }),
      genre: ((movie, genre) => movie.genre === genre),
      bookmarked: ((movie, bookmarked) => movie.bookmarked === bookmarked),
    };

    if (!filters) return movies;

    const filterObjects = [];

    Object.entries(filters).forEach((filter) => {
      if (filter[1]) {
        filterObjects.push({
          name: filter[0],
          filterFunction: filterFunctionLibrary[filter[0]],
        });
      }
    });

    if (!filterObjects.length) return movies;

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
  filters: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

MovieList.defaultProps = {
  filters: {},
};

export default MovieList;
