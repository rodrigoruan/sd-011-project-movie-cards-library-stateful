import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Storyline extends Component {
  render() {
    const { handleInitialValue, value } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          onChange={ handleInitialValue }
          value={ value }
          id="storyline-input"
          name="storyline"
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  handleInitialValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
