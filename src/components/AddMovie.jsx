import React from 'react';
import Input from './Input';

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
        <Input
          labelText="Título"
          labelDataTestId="title-input-label"
          inputType="text"
          inputName="title"
          inputValue={ title }
          inputOnChange={ this.handleChange }
          inputDataTestId="title-input"
        />
        <Input
          labelText="Subtítulo"
          labelDataTestId="subtitle-input-label"
          inputType="text"
          inputName="subtitle"
          inputValue={ subtitle }
          inputOnChange={ this.handleChange }
          inputDataTestId="subtitle-input"
        />
        <Input
          labelText="Imagem"
          labelDataTestId="image-input-label"
          inputType="text"
          inputName="imagePath"
          inputValue={ imagePath }
          inputOnChange={ this.handleChange }
          inputDataTestId="image-input"
        />
        {
          storyline + rating + genre
        }
      </form>
    );
  }
}

export default AddMovie;
