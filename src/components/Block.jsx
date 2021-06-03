import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Block extends Component {
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
        {(type === 'textarea')
          ? (<textarea
            data-testid={ `${name}-input` }
            onChange={ change }
            name={ name }
            value={ value }
          />)
          : (<input
            type={ name === 'rating' ? 'number' : 'text' }
            data-testid={ name === 'imagePath' ? 'image-input' : `${name}-input` }
            onChange={ change }
            name={ name }
            value={ value }
          />)
        }
      </label>
    );
  }
}

Block.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
