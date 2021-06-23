import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Storyline extends Component {
  render() {
    const { storyline, handleFunction } = this.props;
    return (
      <label htmlFor="textarea-input" data-testid="storyline-input-label">
        Sinopse
        <input
          data-testid="storyline-input"
          id="textarea-input"
          name="storyline"
          value={ storyline }
          onChange={ handleFunction }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  storyline: PropTypes.string,
  handleFunction: PropTypes.func,
}.isRequired;

export default Storyline;
