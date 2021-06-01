import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { img, chg } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          name="imagePath"
          type="text"
          data-testid="image-input"
          value={ img }
          onChange={ chg }
        />
      </label>
    );
  }
}
export default Image;

Image.propTypes = {

  img: PropTypes.string.isRequired,
  chg: PropTypes.func.isRequired,
};
