import React, { Component } from 'react';
import Button from './Button';
import Label from './Label';
import LabelFile from './LabelFile';
import LabelNumber from './LabelNumber';
import SelecetLabel from './SelecetLabel';
import TextArea from './TextArea';

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
  }

  handleChanger = ({ target }) => {
    let { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClear = () => {

  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Label
          data="title-input-label"
          value={ title }
          nameInput="title"
          name="Título"
          dataInput="title-input"
          func={ this.handleChanger }
        />
        <Label
          data="subtitle-input-label"
          value={ subtitle }
          nameInput="subtitle"
          name="Subtítulo"
          dataInput="subtitle-input"
          func={ this.handleChanger }
        />
        <LabelFile
          data="image-input-label"
          value={ imagePath }
          nameInput="imagePath"
          name="Imagem"
          dataInput="image-input"
          func={ this.handleChanger }
        />
        <TextArea
          func={ this.handleChanger }
          value={ storyline }
        />
        <LabelNumber
          data="rating-input-label"
          value={ rating }
          nameInput="rating"
          name="Avaliação"
          dataInput="rating-input"
          func={ this.handleChanger }
        />
        <SelecetLabel value={ genre } func={ this.handleChanger } />
        <Button func={ this.handleChanger } name="Adicionar filme" />
      </form>
    );
  }
}

export default AddMovie;
