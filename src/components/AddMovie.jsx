import React, { Component } from 'react';

// implement AddMovie component here
class addMovie extends Component {
  constructor() {
    super()
    this.state = {
      subtítulo: '',
      título: '',
      caminho da imagem: '',
      sinopse: '',
      avaliação: '',
      gênero: 'action',
    }
  }
  render() {
    
    return (
      <div>
        <form data-testid="add-movie-form">

        </form>
      </div>
    )
  }
};
export default addMovie;
