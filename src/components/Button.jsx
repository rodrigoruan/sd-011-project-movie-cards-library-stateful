import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { onClick, resetState } = this.props;

    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ () => {
          onClick();
          resetState();
        } }
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
};

export default Button;
