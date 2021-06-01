// implement AddMovie component here
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleBookMarkedOnly = this.handleBookMarkedOnly.bind(this);
    this.handleSelectedGenre = this.handleSelectedGenre.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleSearchText({ target }) {
    const { value } = target;

    this.setState({
      searchText: value,
    }, () => {
      this.filterMovies();
    });
  }

  handleBookMarkedOnly({ target }) {
    const { checked } = target;

    this.setState({
      bookmarkedOnly: checked,
    }, () => {
      this.filterMovies();
    });
  }

  handleSelectedGenre({ target }) {
    const { value } = target;

    this.setState({
      selectedGenre: value,
    }, () => {
      this.filterMovies();
    });
  }

  filterMovies() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let filteredMovies = movies;

    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter(({ bookmarked }) => bookmarked);
    }

    if (searchText) {
      filteredMovies = filteredMovies.filter(({ title, subtitle, storyline }) => (
        title.toLowerCase().includes(searchText.toLowerCase())
        || subtitle.toLowerCase().includes(searchText.toLowerCase())
        || storyline.toLowerCase().includes(searchText.toLowerCase())
      ));
    }

    if (selectedGenre) {
      filteredMovies = filteredMovies.filter(({ genre }) => genre === selectedGenre);
    }

    this.setState({
      movies: filteredMovies,
    });
  }

  addMovie(state) {
    this.setState((previousState) => ({
      movies: [
        ...previousState.movies,
        state,
      ],
    }));
  }

  // Diegão me ajudou a fazer o requisito 18 e 19
  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookMarkedOnly }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
