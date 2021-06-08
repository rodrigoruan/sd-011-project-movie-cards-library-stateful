import React, { Component } from 'react';
import AddMovieImage from './AddMovieComponents/AddMovieImage';
import AddMovieStoryLine from './AddMovieComponents/AddMovieStoryLine';
import AddMovieSubtitle from './AddMovieComponents/AddMovieSubtitle';
import AddMovieTitle from './AddMovieComponents/AddMovieTitle';

class AddMovie extends Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <AddMovieTitle />
        <AddMovieSubtitle />
        <AddMovieImage />
        <AddMovieStoryLine />

      </form>
    );
  }
}

export default AddMovie;
