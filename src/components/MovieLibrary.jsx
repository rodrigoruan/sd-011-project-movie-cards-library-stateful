import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange({ target }) {
    const { movies } = this.props;
    this.setState(() => ({
      searchText: target.value,
      movies: movies.filter((movie) => movie.title.includes(target.value)
      || movie.subtitle.includes(target.value)
      || movie.storyline.includes(target.value)),
    }));
  }

  onBookmarkedChange({ target }) {
    const { movies } = this.props;
    this.setState(() => ({
      bookmarkedOnly: target.checked,
      movies: movies.filter((movie) => movie.bookmarked === target.checked),
    }));
  }

  onSelectedGenreChange({ target }) {
    const { movies } = this.props;
    this.setState(() => ({
      selectedGenre: target.value,
      movies: movies.filter((movie) => movie.genre === target.value),
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
