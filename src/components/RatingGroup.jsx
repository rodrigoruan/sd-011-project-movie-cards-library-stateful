import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

export default class RatingGroup extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <Form.Group>
        <Form.Label data-testid="rating-input-label">Avaliação</Form.Label>
        <Form.Control
          name="rating"
          value={ value }
          onChange={ onChange }
          data-testid="rating-input"
          className="movieRating"
          step="0.1"
          type="number"
          min="0"
          max="5"
        />
      </Form.Group>
    );
  }
}

RatingGroup.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};
