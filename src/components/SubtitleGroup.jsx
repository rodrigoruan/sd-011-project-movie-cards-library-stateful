import React, { Component } from 'react';
// import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

export default class SubtitleGroup extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label htmlFor="subtitleInputId" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitleInputId"
            name="subtitle"
            value={ value }
            onChange={ onChange }
            data-testid="subtitle-input"
            type="text"
            placeholder="ex: O desenrolar dos enrolados"
          />
        </label>
      </div>
    );
  }
}

SubtitleGroup.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
