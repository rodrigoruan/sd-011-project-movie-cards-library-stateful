import React, { Component } from 'react';

class Sinopse extends Component {
  render() {
    return (
      <textarea
        name="storyline"
        type="text"
        value={ storyline }
        data-testid="storyline-input"
        onChange={ this.movieAdd }
      />
    );
  }
}

export default Sinopse;
