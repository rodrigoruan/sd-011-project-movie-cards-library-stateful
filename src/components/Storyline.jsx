import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Storyline extends Component {
  render() {
    const { initialValue, storyline } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          oncChange={ initialValue }
          value={ storyline }
          type="text"
          name="storyline"
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  initialValue: PropTypes.func,
  storyline: PropTypes.string,
};

Storyline.defaultProps = {
  initialValue: 'undefined',
  storyline: '',
};
