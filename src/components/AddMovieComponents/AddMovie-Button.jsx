import React from 'react';
import PropTypes from 'prop-types';

class BtnNewMovie extends React.Component {
  render() {
    const { funcOnClick } = this.props;

    return (
      <button
        type="submit"
        onClick={ funcOnClick }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }
}

BtnNewMovie.propTypes = {
  funcOnClick: PropTypes.func.isRequired,
};

export default BtnNewMovie;
