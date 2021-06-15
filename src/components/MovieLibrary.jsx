import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.changeTracker = this.changeTracker.bind(this);
    this.filter = this.filter.bind(this);
  }

  changeTracker({ target }) {
    const { type, value } = target;
    if (type === 'text') {
      this.setState({ searchText: value });
    } else if (type === 'checkbox') {
      this.setState({ bookmarkedOnly: target.checked });
    } else {
      this.setState({ selectedGenre: value });
    }
  }

  filter() {
    const { searchText, selectedGenre, bookmarkedOnly, movies } = this.state;
    let filtedmovies = movies;
    if (searchText !== '') {
      filtedmovies = filtedmovies.filter((movie) => movie.title.toLowerCase()
        .includes(searchText)
      || movie.subtitle.toLowerCase().includes(searchText)
      || movie.storyline.toLowerCase().includes(searchText));
    }
    if (bookmarkedOnly === true) {
      filtedmovies = filtedmovies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre !== '') {
      filtedmovies = filtedmovies.filter((movie) => movie.genre === selectedGenre);
    }
    return filtedmovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeTracker }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.changeTracker }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.changeTracker }
        />
        <MovieList movies={ this.filter() } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
