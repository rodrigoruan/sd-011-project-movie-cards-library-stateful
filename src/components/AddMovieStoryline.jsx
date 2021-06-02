import React from 'react';
import PropTypes from 'prop-types';

class AddMovieStoryline extends React.Component {
  render() {
    const { storyline, handler } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          cols="30"
          rows="10"
          data-testid="storyline-input"
          onChange={ handler }
          value={ storyline }
        />
      </label>
    );
  }
}

export default AddMovieStoryline;

AddMovieStoryline.propTypes = {
  storyline: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};
