import React, { Component } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

export default class SubmitButton extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <button data-testid="send-button" type="submit" onClick={ onChange }>
          Adicionar filme
        </button>
      </div>
    );
  }
}

SubmitButton.propTypes = {
  onChange: PropTypes.func.isRequired,
};
