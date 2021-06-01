import React from 'react';
import PropTypes from 'prop-types';

export default class StoryLine extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="storyline-input"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

StoryLine.propTypes = {
  handleChange: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
};
