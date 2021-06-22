import React from 'react';
import PropTypes from 'prop-types';

class AddButton extends React.Component {
  render() {
    const { newMovie } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ newMovie }
      >
        Adicionar filme
      </button>
    );
  }
}

AddButton.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddButton;
