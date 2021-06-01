import React, { Component } from 'react';

export default class Storyline extends Component {
  render() {
    const { initialValue } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          oncChange={ initialValue }
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
};

Storyline.defaultProps = {
  initialValue: 'undefined',
};
