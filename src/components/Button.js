import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const {
      text,
      test,
      onClick,
    } = this.props;
    return (
      <button
        type="button"
        data-testid={ test }
        onClick={ onClick }
      >
        { text }
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
