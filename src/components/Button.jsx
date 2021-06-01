import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { sendFunction } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ sendFunction }
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  sendFunction: PropTypes.func.isRequired,
};

export default Button;
