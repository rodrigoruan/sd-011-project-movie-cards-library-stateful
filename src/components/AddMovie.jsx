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
    this.setState({
      [target.name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const newMovieOptions = filterOptions.slice(1, 4);
    return (
      <form data-testid="add-movie-form">
        <Input text="Título" name="title" value={ title } change={ this.handleChange } />
        <Input
          text="Subtítulo"
          name="subtitle"
          value={ subtitle }
          change={ this.handleChange }
        />
        <Input
          text="Imagem"
          test="image-input"
          name="imagePath"
          value={ imagePath }
          change={ this.handleChange }
        />
        <Textarea
          labelText="Sinopse"
          dataTestId="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ this.handleChange }
        />
        <Input
          type="number"
          text="Avaliação"
          name="rating"
          value={ rating }
          change={ this.handleChange }
        />
        <Select
          labelText="Gênero"
          labelDataTestId="genre-input-label"
          name="genre"
          value={ genre }
          onChange={ this.handleChange }
          selectDataTestId="genre-input"
          options={ newMovieOptions }
        />
      </form>
    );
  }
}

export default AddMovie;
