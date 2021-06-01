import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { clickFunction } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ clickFunction }
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  clickFunction: PropTypes.func.isRequired,
};
