import React from 'react';
import PropTypes from 'prop-types';

class SubmitInput extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <button
          type="button"
          value="Adicionar filme"
          data-testid="send-button"
          onClick={ handleSubmit }
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

SubmitInput.propTypes = {
  handleSubmit: PropTypes.func,
}.isRequired;

export default SubmitInput;
