import React from 'react';
const inicialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.eraseState = this.eraseState.bind(this);
    this.state = inicialState;
  }

  eraseState() {
    this.setState(inicialState);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            name="title"
            value={ this.state.title }
            onChange={ this.handleChange }
          />
        </label>

        <label data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            value={ this.state.subtitle }
            onChange={ this.handleChange }
          />
        </label>

        <label data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="imagePath"
            value={ this.state.imagePath }
            onChange={ this.handleChange }
          />
        </label>

        <label data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            type="text"
            name="storyline"
            value={ this.state.storyline }
            onChange={ this.handleChange }
          />
        </label>

        <label data-testid="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            name="rating"
            value={ this.state.rating }
            onChange={ this.handleChange }
          />
        </label>

        <label data-testid="genre-input-label">
          Gênero
          <select 
            data-testid="genre-input"
            name='genre'
            value={ this.state.genre }
            onChange={ this.handleChange }
            >
            <option 
              data-testid="genre-option"
              value='action'>
              Ação
            </option>
            <option
              data-testid="genre-option"
              value='comedy'>
              Comédia
            </option>
            <option
              data-testid="genre-option"
              value='thriller'>
              Suspense
            </option>
          </select>
        </label>

        <button data-testid="send-button" onClick={ () => {
          onClick(), this.eraseState()
        }} type='button'>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
