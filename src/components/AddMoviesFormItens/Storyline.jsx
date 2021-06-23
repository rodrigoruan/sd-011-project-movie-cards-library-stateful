import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Req.11
class Storyline extends Component {
  render() {
    const { storyline, newSinopse } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          value={ storyline }
          onChange={ newSinopse }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  storyline: PropTypes.string,
  newSinopse: PropTypes.func,
}.isRequired;

export default Storyline;
