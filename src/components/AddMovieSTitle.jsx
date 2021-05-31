import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieSTitle extends Component {
  render() {
    const { event, valueProp } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo:
        <input
          id="subtitle-input"
          name="subtitle"
          value={ valueProp }
          data-testid="subtitle-input"
          type="text"
          onChange={ event }
        />
      </label>
    );
  }
}

AddMovieSTitle.propTypes = {
  valueProp: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};
