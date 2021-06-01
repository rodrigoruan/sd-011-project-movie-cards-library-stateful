import React from 'react';
import PropTypes from 'prop-types';

export default class SubtitleInput extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          id="subtitle-input"
          value={ subtitle }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
};
