// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import TextArea from './TextArea';
import Rating from './Rating';
import Select from './Select';

class AddMovie extends Component {
  render() {
    const { func, title, subtitle, imagePath,
      storyline, rating, genre, onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Input
          handler={ func }
          text="Título"
          dataLabel="title-input-label"
          dataInput="title-input"
          value={ title }
          name="title"
        />
        <Input
          handler={ func }
          text="Subtítulo"
          dataLabel="subtitle-input-label"
          dataInput="title-input"
          value={ subtitle }
          name="subtitle"
        />
        <Input
          handler={ func }
          text="Imagem"
          dataLabel="image-input-label"
          dataInput="image-input"
          value={ imagePath }
          name="imagePath"
        />
        <TextArea value={ storyline } onChange={ func } />
        <Rating handler={ func } value={ rating } />
        <Select handler={ func } value={ genre } />
        <button
          type="reset"
          data-testid="send-button"
          onClick={ onClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}
export default AddMovie;

AddMovie.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
