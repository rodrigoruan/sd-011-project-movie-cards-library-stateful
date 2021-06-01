import React from 'react';

class Image extends React.Component {
  render() {
    const { imagePath, addMyMovies} = this.props
    return (
      <label data-testid="image-input-label">
      Imagem
      <input
      name="imagePath"
      type="text"
      data-testid="image-input"
      value={ imagePath }
      onChange={ addMyMovies }>
        </input>
    </label>
    )
  }
}

Image.propTypes = {
  imagePath: PropTypes.string,
  addMyMovies: PropTypes.func,
}

export default Image;