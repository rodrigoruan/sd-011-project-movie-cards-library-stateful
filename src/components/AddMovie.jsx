// implement AddMovie component here
import React, { Component } from 'react';

export default class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form action="" data-testid="add-movie-form">
          <span>
            Só pra não deixar o form vazio vou puxar os states aqui tb:
            { subtitle }
            { title }
            { imagePath }
            { storyline }
            { rating }
            { genre }
          </span>
        </form>
      </div>
    );
  }
}
