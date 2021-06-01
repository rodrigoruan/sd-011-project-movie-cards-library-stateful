import React from 'react';
import PropTypes from 'prop-types';

class StoryTextArea extends React.Component {
  render() {
    const { value, funcOnChange } = this.props;

    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          value={ value }
          name="storyline"
          onChange={ funcOnChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

StoryTextArea.propTypes = {
  value: PropTypes.string.isRequired,
  funcOnChange: PropTypes.func.isRequired,
};

export default StoryTextArea;
