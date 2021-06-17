import React, { Component } from 'react';
import { string, func } from 'prop-types';

class Storyline extends Component {
  render() {
    const { storyline, handleInputChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          type="text"
          id="storyline"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ handleInputChange }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  storyline: string,
  handleInputChange: func,
}.isRequired;

export default Storyline;
