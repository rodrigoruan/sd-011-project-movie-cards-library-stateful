import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Req.09
class Subtitle extends Component {
  render() {
    const { subtitle, newSubtitle } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ newSubtitle }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string,
  newSubtitle: PropTypes.func,
}.isRequired;

export default Subtitle;
