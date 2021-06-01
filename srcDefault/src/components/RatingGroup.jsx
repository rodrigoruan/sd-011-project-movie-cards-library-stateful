import React, { Component } from 'react';
// import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

export default class RatingGroup extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label htmlFor="ratingInput" data-testid="rating-input-label">
          Avaliação
          <input
            id="ratingInput"
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
        </label>
      </div>
    );
  }
}

RatingGroup.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};
