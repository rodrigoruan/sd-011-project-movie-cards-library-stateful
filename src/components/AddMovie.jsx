import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import filterOptions from '../data2';

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
    this.setState({ [target.name]: value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const newMovieOptions = [];
    const handle = this.handleChange;
    filterOptions.forEach((option) => {
      const { text, value } = option;
      if (text !== 'Todos') {
        newMovieOptions.push({ text, value, dataTestId: 'genre-option' });
      }
    });
    return (
      <form data-testid="add-movie-form">
        <Input text="Título" name="title" value={ title } change={ handle } />
        <Input text="Subtítulo" name="subtitle" value={ subtitle } change={ handle } />
        <Input
          text="Imagem"
          test="image-input"
          name="imagePath"
          value={ imagePath }
          change={ handle }
        />
        <Textarea
          labelText="Sinopse"
          dataTestId="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ handle }
        />
        <Input
          type="number"
          text="Avaliação"
          name="rating"
          value={ rating }
          change={ handle }
        />
        <Select
          labelText="Gênero"
          labelDataTestId="genre-input-label"
          name="genre"
          value={ genre }
          onChange={ handle }
          selectDataTestId="genre-input"
          options={ newMovieOptions }
        />
      </form>
    );
  }
}

export default AddMovie;
