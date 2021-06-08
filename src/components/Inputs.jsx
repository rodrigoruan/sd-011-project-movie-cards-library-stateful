import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Inputs extends Component {
  const { {ldata-testid} } = this.props;
  render() {
    return (
      <label data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          value={ title }
          data-testid="title-input"
          onChange={ this.handleChangeInput }
        />
      </label>
    );
  }
}

export default Inputs;
