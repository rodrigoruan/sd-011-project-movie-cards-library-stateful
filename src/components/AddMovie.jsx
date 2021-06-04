import React from 'react';
import Input from './InputFile';
import Select from './SelectFile';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      image: '',
      storyline: '',
      rating: 0,
      genre: ['ação', 'comédio', 'suspense'],
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
    const { title, subtitle, image, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          label="Título"
          name="title"
          value={ title }
          onChange={ this.handleChange }
        />
        <Input
          label="Subtítulo"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
        />
        <Input
          label="Imagem"
          name="image"
          value={ image }
          onChange={ this.handleChange }
        />
        <Input
          label="Sinopse"
          type="textarea"
          name="storyline"
          value={ storyline }
          onChange={ this.handleChange }
        />
        <Input
          label="Avaliação"
          type="number"
          name="rating"
          value={ rating }
          onChange={ this.handleChange }
        />
        <Select
          label="Gênero"
          value={ genre }
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
