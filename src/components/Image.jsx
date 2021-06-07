import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Image extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          type="text"
          name="ImagePath"
          data-testid="image-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Image.defaultProps = {
  onChange: Proptypes.function,
  value: Proptypes.string,
};

Image.propTypes = {
  onChange: Proptypes.func,
  value: Proptypes.string,
};

export default Image;
