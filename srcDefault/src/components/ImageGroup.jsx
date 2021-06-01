import React, { Component } from 'react';
// import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

export default class ImageGroup extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label htmlFor="imgInput" data-testid="image-input-label">
          Imagem
          <input
            className="movie-card-image"
            id="imgInput"
            name="imagePath"
            value={ value }
            onChange={ onChange }
            data-testid="image-input"
            type="text"
            placeholder="ex: https://image.jpg"
          />
        </label>
      </div>
    );
  }
}

ImageGroup.defaultProps = {
  value: 'value',
  onChange: 'onChange',
};

ImageGroup.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
