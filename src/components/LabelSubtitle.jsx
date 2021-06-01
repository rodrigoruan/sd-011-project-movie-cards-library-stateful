import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelSubtitle extends Component {
  render() {
    const { value, change } = this.props;
    return (
      <label htmlFor="subtitleInput" data-testid="subtitle-input-label">
        Subtítulo:
        <input
          name="subtitle"
          type="text"
          value={ value }
          onChange={ change }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

LabelSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default LabelSubtitle;
