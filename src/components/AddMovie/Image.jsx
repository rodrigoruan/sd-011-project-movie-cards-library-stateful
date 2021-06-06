import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>

    );
  }
}

Image.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

Image.defaultProps = {
  value: '',
  handleChange: () => {},
};

export default Image;
