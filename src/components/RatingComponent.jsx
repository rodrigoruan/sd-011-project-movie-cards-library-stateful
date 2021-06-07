import React, { Component } from 'react';
import Proptypes from 'prop-types';

class RatingComponent extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

RatingComponent.defaultProps = {
  onChange: Proptypes.function,
  value: Proptypes.string,
};

// eslint-disable-next-line react/no-typos
RatingComponent.proptypes = {
  onChange: Proptypes.func,
  value: Proptypes.string,
};

export default RatingComponent;
