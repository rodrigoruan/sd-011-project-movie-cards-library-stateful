import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import { SearchBar } from './SearchBar';
import { AddMovie } from './AddMovie';

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

    this.changeState = this.changeState.bind(this);
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    let filter = movies;

    if (bookmarkedOnly) filter = movies.filter(({ bookmarked }) => bookmarked);

    if (selectedGenre) filter = movies.filter(({ genre }) => genre === selectedGenre);

    if (searchText) {
      filter = movies
        .filter(({ title, subtitle, storyline }) => `${title} ${subtitle} ${storyline}`
          .includes(searchText));
    }

    return filter;
  }

  changeState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSelectedGenreChange={ this.changeState }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.changeState }
          bookmarkedOnly={ bookmarkedOnly }
          onSearchTextChange={ this.changeState }
          searchText={ searchText }
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
