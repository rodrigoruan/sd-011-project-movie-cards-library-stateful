import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Title extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="input-title" data-testid="subtitle-input-label">
        Título
        <input
          name="title"
          id="input-title"
          type="text"
          value={ value }
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
