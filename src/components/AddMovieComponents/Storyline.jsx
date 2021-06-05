import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Storyline extends Component {
  render() {
    const { onChange, defaultValue } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-inpu">
        Sinopse
        <textarea
          type="text"
          data-testid="storyline-input"
          name="storyline"
          defaultValue={ defaultValue }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Storyline.defaultProps = {
  onChange: PropTypes.function,
  defaultValue: 'Stranger',
};

Storyline.propTypes = {
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};
