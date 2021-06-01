import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieBtn extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ onClick }
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

AddMovieBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
