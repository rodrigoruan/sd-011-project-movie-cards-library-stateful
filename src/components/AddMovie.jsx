import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleInputs = this.handleInputs.bind(this);
  }

  handleInputs({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  renderInputs(inputName, inputType, inputValue) {
    return (
      <input
        name={ inputName }
        type={ inputType }
        value={ inputValue }
        data-testid={ inputName === 'imagePath' ? 'image-input' : `${inputName}-input` }
        onChange={ this.handleInputs }
      />
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form" action="">
          <label data-testid="title-input-label" htmlFor="title-input">
            <span>Título</span>
            { this.renderInputs('title', 'text', title) }
          </label>
          <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
            <span>Subtítulo</span>
            { this.renderInputs('subtitle', 'text', subtitle) }
          </label>
          <label data-testid="image-input-label" htmlFor="image-input-label">
            <span>Imagem</span>
            { this.renderInputs('imagePath', 'text', imagePath) }
          </label>
          <label data-testid="storyline-input-label" htmlFor="storyline-input">
            <span>Sinopse</span>
            { this.renderInputs('storyline', 'textarea', storyline) }
          </label>
          <label data-testid="rating-input-label" htmlFor="rating-input">
            <span>Avaliação</span>
            { this.renderInputs('rating', 'number', rating) }
          </label>
          <label data-testid="genre-input-label" htmlFor="genre-input">
            <span>Gênero</span>
            <select
              name="genre"
              value={ genre }
              data-testid="genre-input"
              onChange={ this.handleInputs }
            >
              <option data-testid="genre-option" value="action" selected>Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <button
            data-testid="send-button"
            type="button"
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
