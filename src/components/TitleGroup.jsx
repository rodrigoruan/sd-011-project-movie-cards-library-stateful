import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

export default class TitleGroup extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <Form.Group>
        <Form.Label data-testid="title-input-label">Título</Form.Label>
        <Form.Control
          name="title"
          onChange={ onChange }
          value={ value }
          data-testid="title-input"
          type="text"
          placeholder="ex: A volta dos que não foram"
        />
      </Form.Group>
    );
  }
}

TitleGroup.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
