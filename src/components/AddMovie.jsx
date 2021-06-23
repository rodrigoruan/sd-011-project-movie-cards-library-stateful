import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [`${name}`]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          {' '}
          Título
          <input
            type="text"
            value={ title }
            onChange={ this.handleInputChange }
            data-testid="title-input"
            name="title-input"
          />
        </label>

        <label
          data-testid="subtitle-input-label"
          htmlFor="subtitle"
        >
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            onChange={ this.handleInputChange }
            data-testid="subtitle-input"
            name="subtitle"
          />
        </label>

        <label
          data-testid="image-input-label"
          htmlFor="imagePath"
        >
          Imagem
          <input
            type="text"
            value={ imagePath }
            onChange={ this.handleInputChange }
            data-testid="image-input"
            name="imagePath"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
