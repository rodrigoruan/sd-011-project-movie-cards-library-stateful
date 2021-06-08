import React from 'react';
import InputText from './InputText';
import Textarea from './Textarea';
import InputNumber from './InputNumber';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputText
          labelText="Título"
          dataTestId="title-input"
          name="title"
          value={ title }
          onChange={ this.handleChange }
        />
        <InputText
          labelText="Subtítulo"
          dataTestId="subtitle-input"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
        />
        <InputText
          labelText="Imagem"
          dataTestId="image-input"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleChange }
        />
        <Textarea
          labelText="Sinopse"
          dataTestId="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ this.handleChange }
        />
        <InputNumber
          labelText="Avaliação"
          dataTestId="rating-input"
          name="rating"
          value={ rating }
          onChange={ this.handleChange }
        />
        { genre }
      </form>
    );
  }
}

export default AddMovie;
