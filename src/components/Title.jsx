import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Title extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          type="text"
          name="title"
          data-testid="title-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Title.defaultProps = {
  onChange: Proptypes.function,
  value: Proptypes.string,
};

Title.proptypes = {
  onChange: Proptypes.func,
  value: Proptypes.string,
};

export default Title;
