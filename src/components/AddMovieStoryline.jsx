import React from 'react';
import PropTypes from 'prop-types';

class AddMovieStoryline extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label
        htmlFor="AddMovie__storyline"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          id="AddMovie__storyline"
          data-testid="storyline-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddMovieStoryline.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddMovieStoryline;
