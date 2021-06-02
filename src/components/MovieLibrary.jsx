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
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.filterBySearchText = this.filterBySearchText.bind(this);
    this.filterByBookmark = this.filterByBookmark.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.createMovie = this.createMovie.bind(this);
  }

  async onSearchTextChange({ target }) {
    const { value } = target;
    await this.setState({
      searchText: value,
    });
    this.filterBySearchText();
  }

  async onBookmarkedChange({ target }) {
    const { checked } = target;
    await this.setState({
      bookmarkedOnly: checked,
    });
    this.filterByBookmark();
  }

  async onSelectedGenreChange({ target }) {
    const { value } = target;
    await this.setState({
      selectedGenre: value,
    });
  }

  filterByBookmark() {
    const { bookmarkedOnly, movies } = this.state;
    if (bookmarkedOnly === true) {
      const filtred = movies.filter((movie) => movie.bookmarked === true);
      this.setState((previous) => ({
        movies: filtred,
        moviesBackup: previous.movies,
      }));
    } else {
      this.setState((previous) => ({
        movies: previous.moviesBackup,
      }));
    }
  }

  filterBySearchText() {
    const { searchText, movies } = this.state;
    if (searchText) {
      const filtred = (movies.filter((movie) => (
        (movie.title.toLowerCase().includes(searchText.toLowerCase()))
        || (movie.subtitle.toLowerCase().includes(searchText.toLowerCase()))
        || (movie.storyline.toLowerCase().includes(searchText.toLowerCase()))
      )));
      this.setState({
        movies: filtred,
      });
    }
  }

  createMovie(objeto) {
    const { movies } = this.state;
    this.setState({
      movies: movies.concat(objeto),
    });
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
        <MovieList
          movies={ movies }
        />
        <AddMovie
          onClick={ this.createMovie }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieLibrary.defaultProps = {
  movies: [],
};

export default MovieLibrary;
