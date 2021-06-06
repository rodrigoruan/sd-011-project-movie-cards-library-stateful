import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TittleCard extends Component {
  render() {
    const { handlerChange, value } = this.props;
    return (
      <label htmlFor="title-input-label" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          data-testid="title-input"
          value={ value }
          onChange={ handlerChange }
        />
      </label>
    );
  }
}

export default TittleCard;

TittleCard.propTypes = {
  value: PropTypes.string,
  handlerChange: PropTypes.func,
}.isRequired;
