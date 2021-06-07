import React, { Component } from 'react';
import Proptypes from 'prop-types';

class ImagePath extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          name="ImagePath"
          data-testid="image-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

ImagePath.defaultProps = {
  onChange: Proptypes.function,
  value: Proptypes.string,
};

// eslint-disable-next-line react/no-typos
ImagePath.proptypes = {
  onChange: Proptypes.func,
  value: Proptypes.string,
};

export default ImagePath;
