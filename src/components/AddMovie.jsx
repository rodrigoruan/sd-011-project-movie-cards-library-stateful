import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            value={ title }
            onChange={ this.handleChange }
            name="title"
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="subtitle-lable">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            value={ subtitle }
            onChange={ this.handleChange }
            name="subtitle"
          />
        </label>

        <label data-testid="image-input-label" htmlFor="imagem-path-label">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            value={ imagePath }
            onChange={ this.handleChange }
            name="imagePath"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
