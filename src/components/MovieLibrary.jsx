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
    this.filtersMovies = this.filtersMovies.bind(this);
  }

  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly === false) {
      this.setState({
        bookmarkedOnly: true,
      });
    } else {
      this.setState({
        bookmarkedOnly: false,
      });
    }
  }

  onSelectedGenreChange({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  filtersMovies() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    let result = movies.filter(({ title, subtitle, storyline }) => (
      title.includes(searchText)
      || subtitle.includes(searchText)
      || storyline.includes(searchText)
    ));
    if (bookmarkedOnly) {
      result = result.filter(({ bookmarked }) => bookmarked);
    }
    if (selectedGenre !== '') {
      result = result.filter(({ genre }) => genre === selectedGenre);
    }
    return result;
  }

  // addMoviesInThePage() {

  // }

  render() {
    const {
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
      filtersMovies,
    } = this;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> Minha incrível biblioteca de filmes </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <MovieList movies={ filtersMovies() } />
        <AddMovie onclick={ () => {} } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieLibrary.defaultProps = {
  movies: '',
};

export default MovieLibrary;
