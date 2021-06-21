import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { onButtonClick } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ onButtonClick }
      >
        Adicionar filme
      </button>
    );
  }
}
export default Button;

Button.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};
