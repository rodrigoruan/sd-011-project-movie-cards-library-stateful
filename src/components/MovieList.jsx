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
    if (!filters) return movies;

    const filterObjects = [];

    Object.entries(filters).forEach((filter) => {
      if (filter[1]) {
        filterObjects.push({
          name: filter[0],
          filterFunction: this.filterFunctionLibrary[filter[0]],
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
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  })).isRequired,
  filters: PropTypes.shape({
    bookmarked: PropTypes.bool,
    searchTerm: PropTypes.string,
    genre: PropTypes.string,
  }),
};

MovieList.defaultProps = {
  filters: {
    bookmarked: false,
    serachTerm: '',
    genre: '',
  },
};

export default MovieList;
