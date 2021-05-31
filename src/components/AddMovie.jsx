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
    return (
      <form >
        <label data-testid="title-input-label">
          Titulo:
          <input type="text" value="" name="Title" onChange={this.handleChangerTitle} />
        </label>
        <label data-testid="title-input-label">
          Subtittulo
          <input type="text" name="subtitle" value={this.state.subtitle} />
        </label>
        <label data-testid="image-input-label">
          <input type="file" name="Imagem" value={ this.state.imagePath } data-testid="image-input" onChange={ this.handleChangerTitle } data-testid="subtitle-input" />
        </label>
        <label data-testid="title-input-label">
          <textarea name='sinopse' value={ this.state.storyline } data-testid="storyline-input" />
        </label>
        <label data-testid="title-input-label">
          <textarea name='sinopse' value={ this.state.storyline } data-testid="storyline-input" />
        </label>
      </form>
    )
  }
}
