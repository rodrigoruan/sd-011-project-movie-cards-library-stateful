import React, { Component } from 'react';
import { string, func } from 'prop-types';

class Subtitle extends Component {
  render() {
    const { subtitle, handleInputChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          id="subtitle"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ handleInputChange }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  subtitle: string,
  handleInputChange: func,
}.isRequired;

export default Subtitle;
