import React from 'react';

class ImageInput extends React.Component {
  render() {
    const {
      imagePath,
      handleChange,
    } = this.props;

    return(
      <div>
        <label data-testid="image-input-label" htmlFor="imageNewMovieId">
            <span>Imagem</span>

            <input
              id="imageNewMovieId"
              type="text"
              name="imagePath"
              value={ imagePath }
              onChange={ handleChange }
              data-testid="image-input"
            />

          </label>
      </div>
    );
  }
}

export default ImageInput;