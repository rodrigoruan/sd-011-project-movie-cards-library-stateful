import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SendMovieButton extends Component {
  render() {
    const { handleClickAddMovie, state, resetState } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ () => {
          handleClickAddMovie(state);
          resetState();
        } }
      >
        Adicionar filme
      </button>
    );
  }
}

SendMovieButton.propTypes = {
  handleClickAddMovie: PropTypes.func,
  state: PropTypes.shape({
    subtitle: PropTypes.string,
    title: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    genre: PropTypes.string,
  }),
  resetState: PropTypes.shape({
    subtitle: PropTypes.string,
    title: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    genre: PropTypes.string,
  }),
}.isRequired;

export default SendMovieButton;
