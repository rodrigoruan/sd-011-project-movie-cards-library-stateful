import React from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends React.Component {
  render() {
    const {
      subtitle,
      handleChange,
    } = this.props;

    return (
      <div>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          <span>Subtítulo</span>

          <input
            id="subtitle"
            type="text"
            value={ subtitle }
            onChange={ handleChange }
            data-testid="subtitle-input"
          />

        </label>
      </div>
    );
  }
}

SubtitleInput.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SubtitleInput;
