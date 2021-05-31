import React from 'react';
import LabeledInput from './LabeledInput';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { id, value } = target;

    this.setState({
      [id]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <LabeledInput
          labelTestId="title-input-label"
          labelText="Título"
          id="title"
          value={ title }
          onChange={ this.handleChange }
          data-testid="title-input"
        />
        <LabeledInput
          labelTestId="subtitle-input-label"
          labelText="Subtítulo"
          id="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
          data-testid="subtitle-input"
        />
        <LabeledInput
          labelTestId="image-input-label"
          labelText="Imagem"
          id="imagePath"
          value={ imagePath }
          onChange={ this.handleChange }
          data-testid="image-input"
        />
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="storyline"
            value={ storyline }
            onChange={ this.handleChange }
            data-testid="storyline-input"
          />
        </label>
        <LabeledInput
          labelTestId="rating-input-label"
          labelText="Avaliação"
          id="rating"
          type="number"
          value={ rating }
          onChange={ this.handleChange }
          data-testid="rating-input"
        />
      </form>
    );
  }
}

export default AddMovie;
