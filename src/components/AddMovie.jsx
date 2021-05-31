import React, { Component } from 'react';
import Button from './Button';
import Label from './Label';
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
      genre: '',
    };
  }

  handleChangerTitle = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Label
          data="title-input-label"
          value={ title }
          nameInput="title"
          name="Titulo:"
          dataInput="title-input"
          func={ this.handleChangerTitle }
        />
        <Label
          data="subtitle-input-label"
          value={ subtitle }
          nameInput="subtitle"
          name="Subtitlo:"
          dataInput="subtitle-input"
          func={ this.handleChangerTitle }
        />
        <Label
          data="image-input-label"
          type="file"
          value={ imagePath }
          nameInput="image"
          name="Image:"
          dataInput="image-input"
          func={ this.handleChangerTitle }
        />
        <TextArea
          func={ this.handleChangerTitle }
          value={ storyline }
        />
        <Label
          data="rating-input-label"
          value={ rating }
          nameInput="rating"
          name="Avaliação:"
          dataInput="rating-input"
          func={ this.handleChangerTitle }
        />
        <SelecetLabel value={ genre } func={ this.handleChangerTitle } />
        <Button func={ this.ha } type="submit" name="Adicionar filme" />
      </form>
    );
  }
}

export default AddMovie;
