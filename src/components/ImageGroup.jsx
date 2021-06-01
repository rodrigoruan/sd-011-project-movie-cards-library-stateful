import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

export default class ImageGroup extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <Form.Group>
        <Form.Label data-testid="image-input-label">Imagem</Form.Label>
        <Form.Control
          className="movie-card-image"
          name="imagePath"
          value={ value }
          onChange={ onChange }
          data-testid="image-input"
          type="text"
          placeholder="ex: https://image.jpg"
        />
      </Form.Group>
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
