import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

export default class SubmitButton extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <Form.Group>
        <Button data-testid="send-button" type="submit" onClick={ onChange }>
          Adicionar filme
        </Button>
      </Form.Group>
    );
  }
}

SubmitButton.propTypes = {
  onChange: PropTypes.func.isRequired,
};
