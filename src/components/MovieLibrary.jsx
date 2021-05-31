import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 className="mt-3 text-center"> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={this.props.movies} />
        {/* <AddMovie /> */}
      </div>
    );
  }
}

export default MovieLibrary;
