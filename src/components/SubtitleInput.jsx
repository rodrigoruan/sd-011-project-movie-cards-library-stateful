import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SubtitleInput extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (

      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          value={ value }
          data-testid="subtitle-input"
          onChange={ handleChange }

        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,

};
