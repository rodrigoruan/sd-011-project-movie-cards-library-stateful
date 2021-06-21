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
      movies,
    };

    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleAddMovie(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    // const { movies } = this.state;
    return (
      <>
        <p>Mivie Library</p>
        <SearchBar />
        <MovieList />
        <AddMovie />
        {/* <MovieList movies={ movies } /> */}
        {/* <AddMovie onCLick={ this.handleAddMovie } /> */}
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
