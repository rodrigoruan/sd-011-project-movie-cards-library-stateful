import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { functionCall } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ functionCall }
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  functionCall: PropTypes.func.isRequired,
};
