import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputMovieFirst from './inputMovie/InputMovieFirst';
import InputMovieSecond from './inputMovie/InputMovieSecond';

const state = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default class AddMovie extends Component {
  constructor() {
    super();

    this.handleNewMovie = this.handleNewMovie.bind(this);
    this.initialState = this.initialState.bind(this);

    this.state = state;
  }

  handleNewMovie({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  initialState() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(state);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <InputMovieFirst
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          storyline={ storyline }
          handleNewMovie={ this.handleNewMovie }
        />

        <InputMovieSecond
          rating={ rating }
          genre={ genre }
          handleNewMovie={ this.handleNewMovie }
        />
        <button
          type="button"
          id="btnReset"
          data-testid="send-button"
          onClick={ this.initialState }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
