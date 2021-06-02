import React from 'react';
import PropTypes from 'prop-types';

class StoryLine extends React.Component {
  render() {
    const { inputRead, value } = this.props;
    return (
      <label htmlFor="storyLine-id" data-testid="storyline-input-label">
        Sinopse
        <input
          name="storyLine"
          id="storyLine-id"
          type="text"
          placeholder="Digite a sinopse do filme"
          data-testid="storyline-input"
          value={ value }
          onChange={ inputRead }
        />
      </label>
    );
  }
}

StoryLine.propTypes = {
  inputRead: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default StoryLine;
