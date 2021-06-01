import React from 'react';

class Button extends React.Component {
  render() {
    const { onClick, cleanState, newMovie} = this.props;
    return (
      <button
        data-testid="send-button"
        onClick={ () => {
          onClick(newMovie);
          cleanState();
        } }
        type="button"
      >
        Adicionar filme
      </button>
    );
  }
}

export default Button;
