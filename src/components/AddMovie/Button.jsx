import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ handleClick }
      >
        Adicionar filme
      </button>
    );
  }
}
export default Button;

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
