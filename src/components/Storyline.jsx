import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;

    return (
      <label data-testid="storyline-input-label" htmlFor="addMovieSinopseTextarea">
        Sinopse
        <textarea
          value={ storyline }
          data-testid="storyline-input"
          onChange={ handleChange }
          id="addMovieSinopseTextarea"
          name="storyline"
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Storyline;
