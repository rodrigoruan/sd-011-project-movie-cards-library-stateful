import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Storyline extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          type="text"
          name="storyline"
          data-testid="storyline-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Storyline.defaultProps = {
  onChange: Proptypes.function,
  value: Proptypes.string,
};

Storyline.propTypes = {
  onChange: Proptypes.func,
  value: Proptypes.string,
};

export default Storyline;
