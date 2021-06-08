import React from 'react';
import PropTypes from 'prop-types';

class MovieStoryline extends React.Component {
  render() {
    const { value, name, onChange } = this.props;
    return (
      <label htmlFor data-testid="storyline-input-label">
        Sinopse
        <input
          type="textarea"
          data-testid="storyline-input"
          defaultValue={ value }
          name={ name }
          onChange={ onChange }
        />
      </label>
    );
  }
}

MovieStoryline.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MovieStoryline;
