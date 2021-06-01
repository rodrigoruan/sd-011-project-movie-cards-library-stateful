import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeSubtitle = this.handleChangeSubtitle.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeTextarea = this.handleChangeTextarea.bind(this);
  }

  handleChangeTitle() {

  }

  handleChangeSubtitle() {

  }

  handleChangeImage() {

  }

  handleChangeTextarea() {

  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            data-testid="title-input"
            onChange={ this.handleChangeTitle }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            onChange={ this.handleChangeSubtitle }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            onChange={ this.handleChangeImage }
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            onChange={ this.handleChangeTextarea }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  state: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default AddMovie;
