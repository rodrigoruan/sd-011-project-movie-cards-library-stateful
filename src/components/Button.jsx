import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { handleClearState } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ handleClearState }
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  handleClearState: PropTypes.func.isRequired,
}.isRequired;
