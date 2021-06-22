import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Storyline extends Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  storyline: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Storyline;
