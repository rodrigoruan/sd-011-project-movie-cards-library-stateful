import React from 'react';
import PropTypes from 'prop-types';

class LabelStoryline extends React.Component {
  render() {
    const { storyline } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          value={ storyline }
          onChange={ storyline }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

LabelStoryline.propTypes = {
  storyline: PropTypes.string.isRequired,
};

export default LabelStoryline;
