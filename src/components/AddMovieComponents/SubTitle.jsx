import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SubTitle extends Component {
  render() {
    const { onChange, defaultValue } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          name="subtitle"
          defaultValue={ defaultValue }
          onChange={ onChange }
        />
      </label>

    // <label data-testid="storyline-input-label" htmlFor="storyline-inpu">
    //   Sinopse
    //   <textarea
    //     type="text"
    //     data-testid="storyline-input"
    //     name="storyline"
    //     defaultValue={ storyline }
    //     onChange={ this.changeState }
    //   />
    // </label>

    );
  }
}

SubTitle.defaultProps = {
  onChange: PropTypes.function,
  defaultValue: 'Stranger',
};

SubTitle.propTypes = {
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};
