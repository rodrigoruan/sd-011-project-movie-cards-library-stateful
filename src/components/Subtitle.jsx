import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Subtitle extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Subtitle.defaultProps = {
  onChange: Proptypes.function,
  value: Proptypes.string,
};

// eslint-disable-next-line react/no-typos
Subtitle.proptypes = {
  onChange: Proptypes.func,
  value: Proptypes.string,
};

export default Subtitle;
