import React from 'react';

class FirstPart extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            id="title"
            value={ title }
            name="title"
            type="text"
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitle"
            value={ subtitle }
            name="subtitle"
            type="text"
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            id="imagePath"
            value={ imagePath }
            name="imagePath"
            type="text"
            data-testid="image-input"
            onChange={ this.handleChange }
          />
        </label>
      </>
    );
  }
}

export default FirstPart;
