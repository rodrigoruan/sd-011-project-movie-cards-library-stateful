import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  // constructor() {
  //   super();
  //   this.handleTitle = this.handleTitle.bind(this);
  // }

  render() {
    const { handleTitle, title } = this.props;
    const { handleSubtitle, subtitle } = this.props;
    const { imagePath, handleImage } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name=""
            id=""
            value={ title }
            data-testid="title-input"
            onChange={ handleTitle }
          />
        </label>
        <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name=""
            id=""
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ handleSubtitle }
          />
        </label>
        <label htmlFor="imput-image" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name=""
            id=""
            value={ imagePath }
            data-testid="image-input"
            onChange={ handleImage }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  handleTitle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  handleSubtitle: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  handleImage: PropTypes.func.isRequired,
};

export default AddMovie;
