import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { storyLine, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="text4">
        Sinopse
        <input
          data-testid="storyline-input"
          id="text4"
          type="text"
          name="storyLine"
          value={ storyLine }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  handleChange: PropTypes.func,
  storyLine: PropTypes.string,
}.isRequired;

export default Sinopse;
