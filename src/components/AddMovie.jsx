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
    this.changeState = this.changeState.bind(this);
  }

  changeState({ target }) {
    const { value } = target;
    this.setState({
      title: value,
    });
    console.log('Abaixo temos o this');
    console.log(this);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form action="" data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title-input-label">
            Título
            <input
              type="text"
              data-testid="title-input"
              name="title"
              value={ title }
              onChange={ this.changeState }
            />
          </label>
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
