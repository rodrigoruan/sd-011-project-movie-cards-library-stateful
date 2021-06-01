import React from 'react';
import PropTypes from 'prop-types';

class LabelStoryline extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          onChange={ handleChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

LabelStoryline.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default LabelStoryline;
