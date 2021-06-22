import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { subtitle, onChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="text2">
        Subtítulo
        <input
          data-testid="subtitle-input"
          id="text2"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Subtitle;
