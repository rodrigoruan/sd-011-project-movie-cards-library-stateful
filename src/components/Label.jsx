import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Label extends Component {
  render() {
    const { type, title, change, name, value } = this.props;
    return (
      <label
        data-testid={
          name === 'imagePath' ? 'image-input-label' : `${name}-input-label`
        }
        htmlFor={ name }
      >
        {title}
        {type === 'textarea' ? (
          <textarea
            data-testid={ `${name}-input` }
            onChange={ change }
            name={ name }
            value={ value }
          />
        ) : (
          <input
            type={ name === 'rating' ? 'number' : 'text' }
            onChange={ change }
            name={ name }
            defaultValue={ name === 'rating' ? 0 : null }
            data-testid={ name === 'imagePath' ? 'image-input' : `${name}-input` }
            value={ value }
          />
        )}
      </label>
    );
  }
}

export default Label;

Label.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
