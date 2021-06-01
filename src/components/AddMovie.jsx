// implement AddMovie component here
import React, { Component } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Rating from './Rating';
import Select from './Select';

class AddMovie extends Component {
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
    this.handleInfo = this.handleInfo.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleInfo({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(({
      [name]: value,
    }));
  }

  onClick({ target }) {
    console.log(target);
    this.setState(({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }));
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          handler={ this.handleInfo }
          text="Título"
          dataLabel="title-input-label"
          dataInput="title-input"
          value={ title }
          name="title"
        />
        <Input
          handler={ this.handleInfo }
          text="Subtítulo"
          dataLabel="subtitle-input-label"
          dataInput="title-input"
          value={ subtitle }
          name="subtitle"
        />
        <Input
          handler={ this.handleInfo }
          text="Imagem"
          dataLabel="image-input-label"
          dataInput="image-input"
          value={ imagePath }
          name="imagePath"
        />
        <TextArea value={ storyline } onChange={ this.handleInfo } />
        <Rating handler={ this.handleInfo } value={ rating } />
        <Select handler={ this.handleInfo } value={ genre } />
        <button
          type="reset"
          data-testid="send-button"
          onClick={ this.onClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}
export default AddMovie;
