import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    const {
      text,
      name,
      value,
      change,
    } = this.props;
    return (
      <label
        htmlFor={ name }
        data-testid={ `${name}-input-label` }
      >
        { text }
        <textarea
          id={ name }
          name={ name }
          value={ value }
          onChange={ change }
          data-testid={ `${name}-input` }
        />
      </label>
    );
  }
}

Textarea.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default Textarea;
