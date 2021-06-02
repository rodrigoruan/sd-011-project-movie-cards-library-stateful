import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.resetStateAddNewMovie = this.resetStateAddNewMovie.bind(this);
  }

  handleChange(e) {
    const { name, value, type } = e.target;
    const newValue = type === 'number' ? +value : value;
    this.setState({
      [name]: newValue,
    });
  }

  inputTitle() {
    const { title } = this.state;
    return (
      <label
        htmlFor="title"
        data-testid="title-input-label"
      >
        Título
        <input
          data-testid="title-input"
          type="text"
          name="title"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputSubtitle() {
    const { subtitle } = this.state;
    return (
      <label
        htmlFor="subtitle"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputNumber() {
    const { rating } = this.state;
    return (
      <label
        htmlFor="rating"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          value={ rating }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputImage() {
    const { imagePath } = this.state;
    return (
      <label
        htmlFor="imagePath"
        data-testid="image-input-label"
      >
        Imagem
        <input
          data-testid="image-input"
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  textAreaSinopse() {
    const { storyline } = this.state;
    return (
      <label
        htmlFor="storyline"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          cols="30"
          rows="10"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  selectGenre() {
    const { genre } = this.state;
    return (
      <label
        htmlFor="genre"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={ genre }
          onChange={ this.handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  resetStateAddNewMovie(e) {
    e.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  buttonAddMovie() {
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ this.resetStateAddNewMovie }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form action="" data-testid="add-movie-form">
        {this.inputTitle()}
        {this.inputSubtitle()}
        {this.inputImage()}
        {this.textAreaSinopse()}
        {this.inputNumber()}
        {this.selectGenre()}
        {this.buttonAddMovie()}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
