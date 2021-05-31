import React, { Component } from 'react';
import { Label } from './Label';
import { Select } from './Select';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export class AddMovie extends Component {
  constructor() {
    super();
    this.state = initialState;

    this.activeClick = this.activeClick.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  activeClick(func) {
    func(this.state);
    this.setState(initialState);
  }

  changeState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
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
        <Select genre={ genre } changeState={ this.changeState } />
        <button
          type="button"
          onClick={ () => this.activeClick(onClick) }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
        ;
      </form>
    );
  }
}

export default AddMovie;
