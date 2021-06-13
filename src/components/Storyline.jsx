import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Storyline extends Component {
  render() {
    const { storyline, handleState } = this.props;
    return (
      <label htmlFor="sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ handleState }
        />
      </label>
    );
  }
}

Storyline.propTypes = ({
  storyline: PropTypes.string,
  handleState: PropTypes.func,
}).isRequired;

export default Storyline;
