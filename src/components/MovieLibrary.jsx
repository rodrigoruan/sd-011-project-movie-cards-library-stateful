import React, { Component } from 'react';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  render() {
    // const { movies } = this.props;
    return (
      <div>
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
