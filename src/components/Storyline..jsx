import React from 'react';
import PropTypes from 'prop-types';

class StoryLine extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="textarea-input" data-testid="storyline-input-label">
        Sinopse
        <input
          data-testid="storyline-input"
          id="textarea-input"
          name="storyline"
          value={ storyline }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

StoryLine.propTypes = {
  storyline: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default StoryLine;
