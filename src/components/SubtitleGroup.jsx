import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

export default class SubtitleGroup extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <Form.Group>
        <Form.Label data-testid="subtitle-input-label">Subtítulo</Form.Label>
        <Form.Control
          name="subtitle"
          value={ value }
          onChange={ onChange }
          data-testid="subtitle-input"
          type="text"
          placeholder="ex: O desenrolar dos enrolados"
        />
      </Form.Group>
    );
  }
}

SubtitleGroup.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
