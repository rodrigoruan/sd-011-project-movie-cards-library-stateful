import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

export default class SubmitButton extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <Form.Group>
        <Button data-testid="send-button" type="submit" onClick={ onClick }>
          Adicionar filme
        </Button>
      </Form.Group>
    );
  }
}

SubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
