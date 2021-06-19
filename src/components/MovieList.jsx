import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, filters: { searchText, selectedGenre, bookmarkedOnly } } = this.props;

    const textFilter = (movie) => (searchText !== ''
      ? movie.title.includes(searchText)
    || movie.subtitle.includes(searchText)
    || movie.storyline.includes(searchText) : {});

    const bookmarkedFilter = (movie) => (bookmarkedOnly
      ? movie.bookmarked === true : {}
    );

    const genreFilter = (movie) => (selectedGenre !== ''
      ? movie.genre === selectedGenre : {}
    );

    const filtredMovies = movies.filter((movie) => ( // criei o filtro e coloquei as condicoes que defini usando ternario ali em cima /
      bookmarkedFilter(movie) && textFilter(movie) && genreFilter(movie)
    ));

    return (
      <div data-testid="movie-list" className="movie-list">
        { filtredMovies.map((movie) => (<MovieCard
          key={ movie.title }
          movie={ movie }
        />)) }
      </div>
    );
  }
}

MovieList.propTypes = ({
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.bool,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.string,
}).isRequired;

export default MovieList;
