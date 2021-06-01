import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  inputTitle() {
    const { title } = this.state;
    return (
      <label
        htmlFor="title"
        data-testid="title-input-label"
      >
        Título
        <input
          data-testid="title-input"
          type="text"
          name="title"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputSubtitle() {
    const { subtitle } = this.state;
    return (
      <label
        htmlFor="subtitle"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputImage() {
    const { imagePath } = this.state;
    return (
      <label
        htmlFor="imagePath"
        data-testid="image-input-label"
      >
        Imagem
        <input
          data-testid="image-input"
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  textAreaSinopse() {
    const { storyline } = this.state;
    return (
      <label
        htmlFor="storyline"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          cols="30"
          rows="10"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  render() {
    const { rating, genre } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        {this.inputTitle()}
        {this.inputSubtitle()}
        {this.inputImage()}
        {this.textAreaSinopse()}
        <div>{ rating }</div>
        <div>{ genre }</div>
      </form>
    );
  }
}

export default AddMovie;
