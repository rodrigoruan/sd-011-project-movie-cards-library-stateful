import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonAddMovie extends Component {
  render() {
    const { funcClick } = this.props;
    return (
      <button
        type="button"
        htmlFor="send-button"
        data-testid="send-button"
        onClick={ funcClick }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonAddMovie.propTypes = {
  funcClick: PropTypes.func.isRequired,
};

export default ButtonAddMovie;
