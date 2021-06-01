import React from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends React.Component {
  render() {
    const { subtitle, handleInput } = this.props;
    return (
      <div>
        <label
          className="add-label"
          data-testid="subtitle-input-label"
          htmlFor="subtitle"
        >
          Subtítulo
          <input
            type="text"
            className="add-input"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ handleInput }
          />
        </label>
      </div>
    );
  }
}

SubtitleInput.propTypes = {
  subtitle: PropTypes.string,
  handleInput: PropTypes.func,
}.isRequired;

export default SubtitleInput;
