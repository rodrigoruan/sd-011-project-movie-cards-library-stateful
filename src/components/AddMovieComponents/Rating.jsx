import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Rating extends Component {
  render() {
    const { onChange, defaultValue } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          name="rating"
          defaultValue={ defaultValue }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Rating.defaultProps = {
  onChange: PropTypes.function,
  defaultValue: 0,
};

Rating.propTypes = {
  onChange: PropTypes.func,
  defaultValue: PropTypes.number,
};
