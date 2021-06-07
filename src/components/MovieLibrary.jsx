import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      movies,
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  onSearchTextChange = ({ target: { value } }) => {
    this.setState({ searchText: value });
  }

  onBookmarkedChange = ({ target: { checked } }) => {
    this.setState({ bookmarkedOnly: checked });
  }

  onSelectedGenreChange = ({ target: { value } }) => {
    this.setState({ selectedGenre: value });
  }

  onClick = (newMovie) => {
    this.setState(
      (prevState) => ({
        movies: [...prevState.movies, newMovie],
      }),
    );
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
      bookmarked: PropTypes.bool,
      genre: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieLibrary;
