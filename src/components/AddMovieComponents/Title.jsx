import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Title extends Component {
  render() {
    const { onChange, defaultValue } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          type="text"
          data-testid="title-input"
          name="title"
          defaultValue={ defaultValue }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Title.defaultProps = {
  onChange: PropTypes.function,
  defaultValue: 'Stranger',
};

Title.propTypes = {
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};
