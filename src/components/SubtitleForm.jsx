import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SubtitleForm extends Component {
  // prettier-ignore
  render() {
    const { subtitle, onChangeHandler } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          onChange={ onChangeHandler }
          value={ subtitle }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

SubtitleForm.propTypes = {
  subtitle: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};
