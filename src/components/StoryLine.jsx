import React from 'react';
import PropTypes from 'prop-types';

class StoryLine extends React.Component {
  render() {
    const { storyLine, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          type="text"
          value={ storyLine }
          onChange={ handleChange }
        />
      </label>
    );
  }
}
StoryLine.propTypes = {
  storyLine: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

StoryLine.defaultProps = {
  s: '',
  handleChange: () => {},
};
export default StoryLine;
