// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      // bookmarkedOnly: false,
      // selectedGenre: '',
      movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;

    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  newMovie(object) {
    this.setState((prevState) => ({
      movies: [...prevState.movies, object],
    }));
  }

  render() {
    const { searchText, movies } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
        // bookmarkedOnly={bookmarkedOnly}
        // onBookmarkedChange={this.handleChange}
        // selectedGenre={selectedGenre}
        // onSelectedGenreChange={this.handleChange}
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.newMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieLibrary;
