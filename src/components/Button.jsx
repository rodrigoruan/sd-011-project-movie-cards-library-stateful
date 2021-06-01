import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { resetState } = this.props;
    return (
      <button
        type="submit"
        onClick={ resetState }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  resetState: PropTypes.func.isRequired,
};

export default Button;
