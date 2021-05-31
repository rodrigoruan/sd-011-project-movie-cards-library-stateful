import React, { Component } from 'react';

export class AddMovie extends Component {
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
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            onChange={ this.changeState }
            name="title"
            data-testid="title-input"
            value={ this.title }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="title">
          Subtítulo
          <input
            onChange={ this.changeState }
            name="subtitle"
            data-testid="subtitle-input"
            value={ this.subtitle }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="title">
          Imagem
          <input
            onChange={ this.changeState }
            name="imagePath"
            data-testid="image-input"
            value={ this.imagePath }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
