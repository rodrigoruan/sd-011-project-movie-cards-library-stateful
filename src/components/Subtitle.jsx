import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Subtitle extends Component {
  render() {
    const { value, handleState } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={ value }
          onChange={ handleState }
        />
      </label>
    );
  }
}

Subtitle.propTypes = ({
  value: PropTypes.string,
  handleState: PropTypes.func,
}).isRequired;

export default Subtitle;
