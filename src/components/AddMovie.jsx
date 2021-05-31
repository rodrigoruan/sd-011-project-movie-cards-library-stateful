import React, { Component } from 'react';
import { Label } from './Label';

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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Label
          name="title"
          title="Título"
          change={ this.changeState }
          value={ title }
        />
        <Label
          name="subtitle"
          title="Subtítulo"
          change={ this.changeState }
          value={ subtitle }
        />
        <Label
          name="imagePath"
          title="Imagem"
          change={ this.changeState }
          value={ imagePath }
        />
        <Label
          name="storyline"
          title="Sinopse"
          change={ this.changeState }
          value={ storyline }
        />
        <Label
          name="rating"
          title="Avaliação"
          change={ this.changeState }
          value={ rating }
        />
        <label data-testid="genre-input-label" htmlFor="select">
          Gênero
          <select
            data-testid="genre-input"
            onChange={ this.changeState }
            value={ genre }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
