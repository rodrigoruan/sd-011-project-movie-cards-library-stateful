import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.changeValues = this.changeValues.bind(this);
    this.state({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: action,
    });
  }

  changeValues(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyLine } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input
            name="title"
            data-testid="title-input"
            type="text"
            value={ title }
            onChange={ this.changeValues() }
          />
        </label>
        <br />
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            value={ subtitle }
            onChange={ this.changeValues() }
          />
        </label>
        <br />
        <label data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            value={ imagePath }
            onChange={ this.changeValues() }
          />
        </label>
        <br />
        <label data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            value={ storyLine }
            onChange={ this.changeValues() }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
