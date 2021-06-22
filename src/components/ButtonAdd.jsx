import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ButtonAdd extends Component {
  render() {
    const { resetState } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ resetState }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonAdd.propTypes = {
  resetState: PropTypes.func.isRequired,
};
