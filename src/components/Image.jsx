import React from 'react';

class Image extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="imagePath"
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

export default Image;
