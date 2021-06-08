import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { alias, text, value, cb } = this.props;
    return (
      <label data-testid={ `${alias}-input-label` } htmlFor={ alias }>
        { text }
        <input
          data-testid={ `${alias}-input` }
          type={ alias === 'rating' ? 'number' : 'text' }
          name={ alias === 'image' ? 'imagePath' : alias }
          value={ value }
          onChange={ cb }
        />
      </label>
    );
  }
}

Input.propTypes = {
  alias: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  cb: PropTypes.func.isRequired,
};

export default Input;
