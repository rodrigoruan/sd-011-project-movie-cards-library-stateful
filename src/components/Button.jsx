import React from 'react';

class Button extends React.Component {
  render() {
    const { onClick, cleanState } = this.props;
    return (
      <button
        data-testid="send-button"
        onClick={ () => {
          onClick(), cleanState();
        } }
        type="button"
      >
        Adicionar filme
      </button>
    );
  }
}

export default Button;
