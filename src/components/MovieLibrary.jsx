import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  onSearchTextChange() {
    const { movies, searchText } = this.state;
    this.setState(() => ({
      movies: movies.filter((el) => el.title.includes(searchText)
        || el.subtitle.includes(searchText)
        || el.storyline.includes(searchText)),
    }));
  }

  onBookmarkedChange() {
    const { movies, bookmarkedOnly } = this.state;
    this.setState(() => ({
      movies: movies.filter((el) => el.bookmarked === bookmarkedOnly),
    }));
  }

  onSelectedGenreChange() {
    const { movies, selectedGenre } = this.state;
    this.setState(() => ({
      movies: movies.filter((el) => el.genre === selectedGenre),
    }));
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ onSearchTextChange }
          onBookmarkedChange={ onBookmarkedChange }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default MovieLibrary;
