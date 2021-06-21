import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  renderTitleInput() {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          id="title-input"
          data-testid="title-input"
        />
      </label>
    );
  }

  renderSubTitleInput() {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitle-input"
          type="text"
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  renderImagemInput() {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          id="image-input"
          data-testid="image-input"
        />
      </label>
    );
  }

  renderStoryLine() {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <input
          type="text"
          id="storyline-input"
          data-testid="storyline-input"
        />
      </label>
    );
  }

  renderRatingInput() {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating-input"
          data-testid="rating-input"
          defaultValue={ 0 }
        />
      </label>
    );
  }

  renderGenderInput() {
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          id="genre-input"
          data-testid="genre-input"
        >
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }

  renderButton() {
    const { onClick } = this.props;
    return (
      <button
        type="button"
        onClick={ onClick }
        data-testid="send-button"
      >
        Adicionar filme
      </button>);
  }

  render() {
    return (
      <>
        <p>Add Movie</p>
        <form data-testid="add-movie-form">
          {this.renderTitleInput()}
          {this.renderSubTitleInput()}
          {this.renderImagemInput()}
          {this.renderStoryLine()}
          {this.renderRatingInput()}
          {this.renderGenderInput()}
          {this.renderButton()}
        </form>
      </>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
