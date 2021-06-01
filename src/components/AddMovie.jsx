import React, { Component } from 'react';
import AddMovieTitle from './AddMovieTitle';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieImage from './AddMovieImage';
import AddMovieStoryline from './AddMovieStoryline';
import AddMovieRating from './AddMovieRating';
import AddMovieGenre from './AddMovieGenre';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  addMovie() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <AddMovieTitle title={ title } onChange={ this.handleChange } />
          <AddMovieSubtitle subtitle={ subtitle } onChange={ this.handleChange } />
          <AddMovieImage imagePath={ imagePath } onChange={ this.handleChange } />
          <AddMovieStoryline storyline={ storyline } onChange={ this.handleChange } />
          <AddMovieRating rating={ rating } onChange={ this.handleChange } />
          <AddMovieGenre genre={ genre } onChange={ this.handleChange } />
        </form>
        <button
          data-testid="send-button"
          type="submit"
          onClick={ this.addMovie }
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

export default AddMovie;
