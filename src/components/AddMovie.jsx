import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.initialState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChanges(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  onClick() {
    this.setState(() => this.initialState);
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title-input-label">
            Título:
            <input
              name="title"
              data-testid="title-input"
              type="text"
              value={ title }
              onChange={ this.handleChanges }
            />
          </label>
          <label data-testid="subtitle-input-label" htmlFor="subtitle-input-label">
            Subtítulo:
            <input
              name="subtitle"
              data-testid="subtitle-input"
              type="text"
              value={ subtitle }
              onChange={ this.handleChanges }
            />
          </label>
          <label data-testid="image-input-label" htmlFor="image-input-label">
            Imagem:
            <input
              name="imagePath"
              data-testid="image-input"
              type="text"
              value={ imagePath }
              onChange={ this.handleChanges }
            />
          </label>
          <label data-testid="storyline-input-label" htmlFor="storyline-input-label">
            Sinopse:
            <textarea
              name="storyline"
              data-testid="storyline-input"
              value={ storyline }
              onChange={ this.handleChanges }
            />
          </label>
          <label data-testid="rating-input-label" htmlFor="rating-input-label">
            Avaliação:
            <input
              name="rating"
              data-testid="rating-input"
              type="number"
              value={ rating }
              onChange={ this.handleChanges }
            />
          </label>
          <label data-testid="genre-input-label" htmlFor="genre-input-label">
            Gênero:
            <select
              name="genre"
              data-testid="genre-input"
              value={ genre }
              onChange={ this.handleChanges }
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <button data-testid="send-button" onClick={ this.props.onClick }>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
