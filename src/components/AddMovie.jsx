import React from 'react';
import PropTypes from 'prop-types';
import AddTitle from './AddTitle';
import AddSubtitle from './AddSubtitle';

class AddMovie extends React.Component {
  // constructor() {
  //   super();
  //   this.handleTitle = this.handleTitle.bind(this);
  // }

  render() {
    const { imagePath, handleImage } = this.props;
    const { handleSinopse, sinopse } = this.props;
    return (
      <form data-testid="add-movie-form">
        <AddTitle />
        <AddSubtitle />
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
        <label htmlFor="textarea" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            data-testid="storyline-input"
            onChange={ handleSinopse }
          >
            { sinopse }
          </textarea>
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleImage: PropTypes.func.isRequired,
  handleSinopse: PropTypes.func.isRequired,
  sinopse: PropTypes.string.isRequired,
};

export default AddMovie;
