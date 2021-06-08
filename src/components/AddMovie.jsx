import React, { Component } from 'react';
import addMovieImage from './addMovieImage';
import addMovieRating from './addMovieRating';
import addMovieStoryline from './addMovieStoryline';
import addMovieSubtitle from './addMovieSubtitle';
import addMovieTitle from './addMovieTitle';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleMovie = this.handleMovie.bind(this);
  }

  handleMovie({ e }) {
    const { name, value } = e;
    this.setState({ [name]: value });
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <addMovieTitle title={ title } handleMovie={ this.handleMovie } />
        <addMovieSubtitle subtitle={ subtitle } handleMovie={ this.handleMovie } />
        <addMovieImage imagePath={ imagePath } handleMovie={ this.handleMovie } />
        <addMovieStoryline storyline={ storyline } handleMovie={ this.handleMovie } />
        <addMovieRating rating={ rating } handleMovie={ this.handleMovie } />
      </form>
    );
  }
}

export default AddMovie;