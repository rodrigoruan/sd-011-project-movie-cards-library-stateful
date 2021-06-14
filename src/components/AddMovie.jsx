import React, { Component } from 'react';
import propTypes from 'prop-types';
import AddMovieTitle from './AddMovieTitle';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieImage from './AddMovieImage';
import AddMovieStoryline from './AddMovieStoryline';
import AddMovieRating from './AddMovieRating';
import AddMovieGenre from './AddMovieGenre';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.changeTracker = this.changeTracker.bind(this);
  }

  changeTracker({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovieTitle title={ title } changer={ this.changeTracker } />
        <AddMovieSubtitle subtitle={ subtitle } changer={ this.changeTracker } />
        <AddMovieImage imagePath={ imagePath } changer={ this.changeTracker } />
        <AddMovieStoryline storyline={ storyline } changer={ this.changeTracker } />
        <AddMovieRating rating={ rating } changer={ this.changeTracker } />
        <AddMovieGenre genre={ genre } changer={ this.changeTracker } />
      </form>
    );
  }
}

export default AddMovie;
