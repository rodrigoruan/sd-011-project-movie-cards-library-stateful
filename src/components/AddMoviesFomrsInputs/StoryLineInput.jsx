import React from 'react';
import PropTypes from 'prop-types';

class StoryLineInput extends React.Component {
  render() {
    const { storyline, chosenMovie } = this.props;

    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline-input"
          name="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ chosenMovie }
        />
      </label>
    );
  }
}

StoryLineInput.propTypes = {
  storyline: PropTypes.string.isRequired,
  chosenMovie: PropTypes.func.isRequired,
};

export default StoryLineInput;
