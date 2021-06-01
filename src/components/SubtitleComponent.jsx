import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ value }
          onChange={ handleChange }
          data-testid="subtitle-input"
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
