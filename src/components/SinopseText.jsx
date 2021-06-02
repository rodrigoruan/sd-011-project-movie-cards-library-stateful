import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SinopseText extends Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="sinopse">
        Sinopse
        <textarea
          id="sinopse"
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

SinopseText.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
