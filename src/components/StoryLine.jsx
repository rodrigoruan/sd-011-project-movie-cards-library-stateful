import React from 'react';
import PropTypes from 'prop-types';

class StoryLine extends React.Component {
  render() {
    const { storyline, handleChangeStoryLine } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          type="textarea"
          value={ storyline }
          onChange={ handleChangeStoryLine }
        />
      </label>
    );
  }
}
StoryLine.propTypes = {
  storyLine: PropTypes.string,
  handleChangeStoryLine: PropTypes.func,
}.isRequired;

// StoryLine.defaultProps = {
//   storyLine: '',
//   handleChangeStoryLine: () => {},
// };
export default StoryLine;
