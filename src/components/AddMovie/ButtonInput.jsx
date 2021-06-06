import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonInput extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ onClick }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonInput.propTypes = {
  onClick: PropTypes.func,
};

ButtonInput.defaultProps = {
  onClick: () => {},
};

export default ButtonInput;
