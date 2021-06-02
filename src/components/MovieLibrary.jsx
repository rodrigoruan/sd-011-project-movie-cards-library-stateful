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
  }

  async onBookmarkedChange({ target }) {
    const { checked } = target;
    await this.setState({
      bookmarkedOnly: checked,
    });
  }

  async onSelectedGenreChange({ target }) {
    const { value } = target;
    await this.setState({
      selectedGenre: value,
    });
  }

  createMovie(objeto) {
    const { movies } = this.state;
    this.setState({
      movies: movies.concat(objeto),
    });
  }

  filter({ movies, searchText, bookmarkedOnly, selectedGenre }) {
    let filtred = (movies.filter((movie) => (
      (movie.title.toLowerCase().includes(searchText.toLowerCase()))
      || (movie.subtitle.toLowerCase().includes(searchText.toLowerCase()))
      || (movie.storyline.toLowerCase().includes(searchText.toLowerCase()))
    )));
    if (bookmarkedOnly === true) {
      filtred = filtred.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre) {
      filtred = filtred.filter((movie) => movie.genre === selectedGenre);
    }
    return filtred;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filtred = this.filter(this.state);
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
          movies={ filtred }
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
