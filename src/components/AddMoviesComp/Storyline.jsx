import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Storyline extends Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <div>
        <label data-testid="storyline-input-label" htmlFor="image">
          Sinopse
          <textarea
            data-testid="storyline-input"
            type="text"
            name="storyline"
            value={ storyline }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

export default Storyline;

Storyline.propTypes = {
  storyline: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
