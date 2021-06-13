import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Subtitle extends Component {
  render() {
    const { subtitle, handleState } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ handleState }
        />
      </label>
    );
  }
}

Subtitle.propTypes = ({
  subtitle: PropTypes.string,
  handleState: PropTypes.func,
}).isRequired;

export default Subtitle;
