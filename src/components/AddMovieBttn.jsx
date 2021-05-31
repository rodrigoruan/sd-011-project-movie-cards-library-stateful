import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieBttn extends Component {
  render() {
    const { event } = this.props;
    return (
      <button
        data-testid="send-button"
        type="submit"
        onClick={ event }
      >
        Adicionar filme
      </button>
    );
  }
}

AddMovieBttn.propTypes = {
  event: PropTypes.func.isRequired,
};
