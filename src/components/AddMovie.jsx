import React, { Component } from 'react';
import Label from './Label';

export class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.changeState = this.changeState.bind(this);
  }

  changeState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Label
          labelId="-input-label"
          name="title"
          title="Título"
          change={ this.changeState }
          elementId="title-input"
          value={ this.title }
        />
        <Label
          labelId="-input-label"
          name="subtitle"
          title="Subtítulo"
          change={ this.changeState }
          elementId="subtitle-input"
          value={ this.subtitle }
        />
        <Label
          labelId="-input-label"
          name="imagePath"
          title="Imagem"
          change={ this.changeState }
          elementId="image-input"
          value={ this.imagePath }
        />
        <label data-testid="storyline-input-label" htmlFor="Sinopse">
          Sinopse
          <textarea
            onChange={ this.changeState }
            name="storyline"
            data-testid="storyline-input"
            value={ this.storyline }
          />
        </label>
        <Label
          type="number"
          labelId="-input-label"
          name="rating"
          defVal="0"
          title="Avaliação"
          change={ this.changeState }
          elementId="rating-input"
          value={ this.rating }
        />
      </form>
    );
  }
}

export default AddMovie;
