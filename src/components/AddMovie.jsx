import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
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
    this.resetState = this.resetState.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  resetState(event) {
    event.preventDefault();
    const { onClick } = this.props;
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    onClick(event);
  }

  inputTitle() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="titleinput">
        Título
        <input
          data-testid="title-input"
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
      <label data-testid="subtitle-input-label" htmlFor="subtitleinput">
        Subtítulo
        <input
          data-testid="subtitle-input"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputImagePath() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="imageinput">
        Imagem
        <input
          data-testid="image-input"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputStoryLine() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storylineinput">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputRating() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="ratinginput">
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

  inputGenre() {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="genreinput">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={ genre }
          onChange={ this.handleChange }
        >
          <option value="action" data-testid="genre-option">action</option>
          <option value="comedy" data-testid="genre-option">comedy</option>
          <option value="thriller" data-testid="genre-option">thriller</option>
        </select>
      </label>
    );
  }

  AddFilm() {
    return (
      <button type="button" data-testid="send-button" onClick={ this.resetState }>
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.inputTitle()}
        {this.inputSubtitle()}
        {this.inputImagePath()}
        {this.inputStoryLine()}
        {this.inputRating()}
        {this.inputGenre()}
        {this.AddFilm()}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
