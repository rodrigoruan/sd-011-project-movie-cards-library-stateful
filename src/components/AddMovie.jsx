import React, { Component } from 'react';
import AddMovieTitle from './AddMovieComponents/AddMovieTitle';

class AddMovie extends Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <AddMovieTitle />

      </form>
    );
  }
}

export default AddMovie;
