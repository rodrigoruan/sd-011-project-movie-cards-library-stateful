import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Storyline extends Component {
  render() {
    const { value, handleState } = this.props;
    return (
      <label htmlFor="sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          value={ value }
          onChange={ handleState }
        />
      </label>
    );
  }
}

Storyline.propTypes = ({
  value: PropTypes.string,
  handleState: PropTypes.func,
}).isRequired;

export default Storyline;
