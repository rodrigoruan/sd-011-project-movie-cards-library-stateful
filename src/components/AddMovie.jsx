import React, { Component } from 'react';
import PropTypes from 'prop-types';
import addMovieTitle from './addMovieTitle';
import addMovieGenre from './addMovieGenre';
import addMovieImage from './addMovieImage';
import addMovieRating from './addMovieRating';
import addMovieStoryline from './addMovieStoryline';
import addMovieSubtitle from './addMovieSubtitle';

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
        <addMovieTitle title={ title } handleMovie={ this.handleMovie } />
        <addMovieSubtitle subtitle={ subtitle } handleMovie={ this.handleMovie } />
        <addMovieImage imagePath={ imagePath } handleMovie={ this.handleMovie } />
        <addMovieStoryline storyline={ storyline } handleMovie={ this.handleMovie } />
        <addMovieRating rating={ rating } handleMovie={ this.handleMovie } />
        <addMovieGenre genre={ genre } handleMovie={ this.handleMovie } />
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
