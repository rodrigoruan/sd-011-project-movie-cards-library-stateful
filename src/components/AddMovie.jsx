import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    };
    this.updateState = this.updateState.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  formSubmitHandler(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    });
  }

  updateState(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  renderInputTitle() {
    const { title } = this.state;
    return (
      <InputText
        elementText="Título"
        id="titleInput"
        testIdLabel="title-input-label"
        testIdInput="title-input"
        name="title"
        value={ title }
        func={ this.updateState }
      />
    );
  }

  renderInputSubtitle() {
    const { subtitle } = this.state;
    return (
      <InputText
        elementText="Subtítulo"
        id="subtitleInput"
        testIdLabel="subtitle-input-label"
        testIdInput="subtitle-input"
        name="subtitle"
        value={ subtitle }
        func={ this.updateState }
      />
    );
  }

  renderInputImage() {
    const { imagePath } = this.state;
    return (
      <InputText
        elementText="Imagem"
        id="imageInput"
        testIdLabel="image-input-label"
        testIdInput="image-input"
        name="imagePath"
        value={ imagePath }
        func={ this.updateState }
      />
    );
  }

  renderInputStoryline() {
    const { storyline } = this.state;
    return (
      <label
        htmlFor="storylineInput"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          cols="30"
          rows="1"
          id="storylineInput"
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ this.updateState }
        />
      </label>
    );
  }

  renderInputRating() {
    const { rating } = this.state;
    return (
      <label
        htmlFor="ratingNumber"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          type="number"
          id="ratingNumber"
          data-testid="rating-input"
          name="rating"
          value={ rating }
          onChange={ this.updateState }
        />
      </label>
    );
  }

  renderSelectGenre() {
    const { genre } = this.state;
    return (
      <label
        htmlFor="genreSelect"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          id="genreSelect"
          data-testid="genre-input"
          name="genre"
          value={ genre }
          onChange={ this.updateState }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.renderInputTitle()}
        {this.renderInputSubtitle()}
        {this.renderInputImage()}
        {this.renderInputStoryline()}
        {this.renderInputRating()}
        {this.renderSelectGenre()}
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.formSubmitHandler }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.defaultProps = {
  onClick: () => {},
};

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

export default AddMovie;
