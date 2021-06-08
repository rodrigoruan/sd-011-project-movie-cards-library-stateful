import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubtitleCard extends Component {
  render() {
    const { handlerChange, value } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={ value }
          onChange={ handlerChange }
        />
      </label>
    );
  }
}

export default SubtitleCard;

SubtitleCard.propTypes = {
  value: PropTypes.string,
  handlerChange: PropTypes.func,
}.isRequired;
