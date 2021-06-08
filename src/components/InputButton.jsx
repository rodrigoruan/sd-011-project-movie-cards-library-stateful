import React from 'react';
import PropTypes from 'prop-types';

class InputButton extends React.Component {
  render() {
    const { onClick, returnStateInit } = this.props;

    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ () => {
          onClick();
          returnStateInit();
        } }
      >
        Adicionar filme
      </button>
    );
  }
}

InputButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  returnStateInit: PropTypes.func.isRequired,
};

export default InputButton;
