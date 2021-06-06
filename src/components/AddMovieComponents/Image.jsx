import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { onChange, defaultValue } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          name="imagePath"
          // defaultValue={ defaultValue }
          value={ defaultValue }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.defaultProps = {
  onChange: PropTypes.function,
  defaultValue: 'Stranger',
};

Input.propTypes = {
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};
