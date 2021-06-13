import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
    };
    this.textInputTitle = this.textInputTitle.bind(this);
    this.textInputSubtitle = this.textInputSubtitle.bind(this);
    this.imagePathAdd = this.imagePathAdd.bind(this);
    this.textAreaInput = this.textAreaInput.bind(this);
  }

  textInputTitle({ target }) {
    this.setState({ title: target.value });
  }

  textInputSubtitle({ target }) {
    this.setState({ subtitle: target.value });
  }

  imagePathAdd({ target }) {
    this.setState({ imagePath: target.value });
  }

  textAreaInput({ target }) {
    this.setState({ storyline: target.value });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          { onClick }
          <label htmlFor="input" data-testid="title-input-label">
            Título
            <input
              type="text"
              data-testid="title-input"
              onChange={ this.textInputTitle }
              value={ title }
            />
          </label>
          <label htmlFor="input" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              data-testid="subtitle-input"
              onChange={ this.textInputSubtitle }
              value={ subtitle }
            />
          </label>
          <label htmlFor="input" data-testid="image-input-label">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              onChange={ this.imagePathAdd }
              value={ imagePath }
            />
          </label>
          <label htmlFor="input" data-testid="storyline-input-label">
            Sinopse
            <input
              type="textarea"
              data-testid="storyline-input"
              onChange={ this.textAreaInput }
              value={ storyline }
            />
          </label>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
