import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="text4">
        Sinopse
        <textarea
          data-testid="storyline-input"
          id="text4"
          type="text"
          name="storyline"
          value={ storyline }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  handleChange: PropTypes.func,
  storyline: PropTypes.string,
}.isRequired;

export default Sinopse;
