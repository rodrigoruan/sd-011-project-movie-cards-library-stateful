import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovieTitle from './AddMovieTitle';
import AddMovieGenre from './AddMovieGenre';
import AddMovieImage from './AddMovieImage';
import AddMovieRating from './AddMovieRating';
import AddMovieStoryline from './AddMovieStoryline';
import AddMovieSubtitle from './AddMovieSubtitle';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleMovie = this.handleMovie.bind(this);
    this.resetButton = this.resetButton.bind(this);
  }

  handleMovie({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  resetButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    });
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
        <AddMovieTitle title={ title } handleMovie={ this.handleMovie } />
        <AddMovieSubtitle subtitle={ subtitle } handleMovie={ this.handleMovie } />
        <AddMovieImage imagePath={ imagePath } handleMovie={ this.handleMovie } />
        <AddMovieStoryline storyline={ storyline } handleMovie={ this.handleMovie } />
        <AddMovieRating rating={ rating } handleMovie={ this.handleMovie } />
        <AddMovieGenre genre={ genre } handleMovie={ this.handleMovie } />
        <button type="button" data-testid="send-button" onClick={ this.resetButton }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: () => {},
};
