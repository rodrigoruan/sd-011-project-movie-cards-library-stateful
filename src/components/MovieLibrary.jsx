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

    this.handlerChanges = this.handlerChanges.bind(this);
    this.handleFilters = this.handleFilters.bind(this);
    this.updateState = this.updateState.bind(this);
    this.insertMovie = this.insertMovie.bind(this);
  }

  handlerChanges({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState(() => ({
      [name]: value,
    }), () => {
      this.handleFilters();
    });
  }

  handleFilters() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const searchToLower = searchText.toLowerCase();
    const { movies } = this.props;
    let filteredArray = [...movies];

    if (searchText) {
      filteredArray = filteredArray.filter(
        ({ title, subtitle, storyline }) => title.toLowerCase().includes(searchToLower)
        || subtitle.toLowerCase().includes(searchToLower)
        || storyline.toLowerCase().includes(searchToLower),
      );
    }

    if (bookmarkedOnly === true) {
      filteredArray = filteredArray.filter(({ bookmarked }) => bookmarked === true);
    }

    if (selectedGenre !== '') {
      filteredArray = filteredArray.filter(({ genre }) => genre === selectedGenre);
    }

    this.updateState('movies', filteredArray);
  }

  updateState(name, value) {
    this.setState(() => ({
      [name]: value,
    }));
  }

  insertMovie(param) {
    const { movies } = this.props;

    this.setState({
      movies: [...movies, param],
    });
  }

  render() {
    const { searchText, selectedGenre, movies, bookmarkedOnly } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handlerChanges }
          onBookmarkedChange={ this.handlerChanges }
          onSelectedGenreChange={ this.handlerChanges }
          bookmarkedOnly={ bookmarkedOnly }
        />
        <MovieList
          movies={ movies }
        />
        <AddMovie onClick={ this.insertMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
