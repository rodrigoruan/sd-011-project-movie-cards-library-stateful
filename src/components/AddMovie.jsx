import React, { Component } from 'react';
import LabelInput from './LabelInput';
import LabelSelect from './LabelSelect';
import LabelTextArea from './LabelTextArea';
import LabelNumber from './LabelNumber';
import Button from './Button';

const objeto = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor() {
    super();
    this.state = objeto;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const { onClick } = this.props;
    onClick(this.state);
    this.resetState();
  }

  resetState() {
    this.setState(objeto);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <LabelInput
          id="title-input-label"
          name="Título"
          idInput="title-input"
          nameInput="title"
          valueInput={ title }
          funcInput={ this.handleChange }
        />
        <LabelInput
          id="subtitle-input-label"
          name="Subtítulo"
          idInput="subtitle-input"
          nameInput="subtitle"
          valueInput={ subtitle }
          funcInput={ this.handleChange }
        />
        <LabelInput
          id="image-input-label"
          name="Imagem"
          idInput="image-input"
          nameInput="imagePath"
          valueInput={ imagePath }
          funcInput={ this.handleChange }
        />
        <LabelTextArea
          valueInput={ storyline }
          func={ this.handleChange }
        />
        <LabelNumber
          id="rating-input-label"
          name="Avaliação"
          idInput="rating-input"
          nameInput="rating"
          valueInput={ rating }
          funcInput={ this.handleChange }
        />
        <LabelSelect
          valueSelect={ genre }
          func={ this.handleChange }
        />
        <Button clickFunction={ this.handleSubmit } />
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
