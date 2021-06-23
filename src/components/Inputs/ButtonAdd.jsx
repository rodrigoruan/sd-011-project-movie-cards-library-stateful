import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonAdd extends Component {
  render() {
    const { newMovie } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ newMovie }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonAdd.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default ButtonAdd;
