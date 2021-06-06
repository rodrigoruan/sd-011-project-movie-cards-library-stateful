import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ onClick }
      >
        Adicionar filme
      </button>

    );
  }
}
