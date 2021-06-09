import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

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

    this.addMovie = this.addMovie.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);
  }

  onChangeHandle({ target }) {
    const { id, type, checked } = target;

    const value = type === 'checkbox' ? checked : target.value;

    this.setState({
      [id]: value,
    });
  }

  addMovie(newMovie) {
    const { movies } = this.state;

    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onChangeHandle }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onChangeHandle }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onChangeHandle }
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
