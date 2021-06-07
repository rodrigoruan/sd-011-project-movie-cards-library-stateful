import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { handleChang } = this.props;

    return (
      <button
        data-testid="send-button"
        onClick={ handleChang }
        type="button"
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  handleChang: PropTypes.func.isRequired,
  // button: PropTypes.func.isRequired,
};

export default Button;
