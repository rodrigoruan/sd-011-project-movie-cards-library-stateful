import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="subInp" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          id="subInp"
          name="subtitle"
          data-testid="subtitle-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Subtitle;
