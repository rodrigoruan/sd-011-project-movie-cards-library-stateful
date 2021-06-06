import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sinopse extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

Sinopse.defaultProps = {
  value: '',
  handleChange: () => {},
};

export default Sinopse;
