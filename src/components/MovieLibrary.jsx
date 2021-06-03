import React, { Component } from 'react';
import PropTypes from 'prop-types';

// external files imports
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  // super
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  // functions
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
      movies: [items.movies, movieAdd],
    }));
  }

  // render
  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

// propTypes
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

// export
export default MovieLibrary;
