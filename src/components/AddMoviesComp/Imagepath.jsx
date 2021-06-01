import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Imagepath extends Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <div>
        <label data-testid="image-input-label" htmlFor="image">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="imagePath"
            value={ imagePath }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

export default Imagepath;

Imagepath.propTypes = {
  subtitle: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
