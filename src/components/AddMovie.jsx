import React, { Component } from 'react'

class AddMovie extends Component {
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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    let { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <label data-testid="title-input-label">
          Título
          <input data-testid="title-input" name="title" value={ this.state.title } onChange={ this.handleChange } />
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input data-testid="subtitle-input" name="subtitle" value={ this.state.subtitle } onChange={ this.handleChange } />
        </label>
        <label data-testid="image-input-label">
          Imagem
          <input data-testid="image-input" name="imagePath" value={ this.state.imagePath } onChange={ this.handleChange } />
        </label>
        <label data-testid="storyline-input-label">
          Sinopse
          <textarea data-testid="storyline-input" value={ this.state.storyline }>
            <option></option>
            <option></option>
            <option></option>
          </textarea>

        </label>
      </form>
    )
  }
}

export default AddMovie;
