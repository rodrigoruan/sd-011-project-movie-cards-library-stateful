import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonAddMovie extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ onClick }
        className="button"
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonAddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonAddMovie;
