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

export default AddButton;

AddButton.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

// Source: consulta ao repositório https://github.com/tryber/sd-011-project-movie-cards-library-stateful/pull/173/
