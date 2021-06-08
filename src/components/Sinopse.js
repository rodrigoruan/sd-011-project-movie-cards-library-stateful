import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="sinInp" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="sinInp"
          data-testid="storyline-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Sinopse;
