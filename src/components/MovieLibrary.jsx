import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

// import PropTypes from 'prop-types';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    // const { movies } = this.props;

    /* this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    }; */

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({
      [name]: value,
    }));
  }

  addMovie({ title, subtitle, imagePath, storyLine, rating, genre }) {
    const movieAdd = {
      title,
      subtitle,
      imagePath,
      storyLine,
      rating,
      genre,
    };
    this.setState((items) => ({
      movies: [...items.movies, movieAdd],
    }));
  }

  render() {
    /* const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state; */

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
