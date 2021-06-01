import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { submit } = this.props;
    return (
      <button
        data-testid="send-button"
        type="reset"
        onClick={ submit }
      >
        Adicionar filme
      </button>
    );
  }
}

export default Button;

Button.propTypes = {
  submit: PropTypes.func.isRequired,
};
