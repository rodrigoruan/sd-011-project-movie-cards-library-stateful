import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { onChange, defaultValue } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          name="imagePath"
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

Input.defaultProps = {
  onChange: PropTypes.function,
  defaultValue: 'Stranger',
};

Input.propTypes = {
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};
