import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input 
            data-testid="title-input"
            type='text'
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>

        <label data-testid="subtitle-input-label">
          Subtítulo
          <input 
          data-testid="subtitle-input"
          type='text'
          name='subtitle'
          value={this.state.subtitle}
          onChange={this.handleChange}
          />
        </label>

        <label data-testid="image-input-label">
          Imagem
          <input 
            data-testid="image-input"
            type='file'
            name='imagePath'
            value={this.state.imagePath}
            onChange={this.handleChange}
          />
        </label>

        <label data-testid="storyline-input-label">
          Sinopse
          <textarea 
            data-testid="storyline-input"
            type='text'
            name='storyline'
            value={this.state.storyline}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
