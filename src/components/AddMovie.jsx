import PropTypes from 'prop-types';
import React from 'react';
import Input from './input';
import Textarea from './textarea';
import Select from './select';
import Rating from './rating';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  handler = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(({
      [name]: value,
    }));
  }

  handleClick = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          handler={ this.handler }
          text="Título"
          dataLabel="title-input-label"
          dataInput="title-input"
          value={ title }
          name="title"
        />
        <Input
          handler={ this.handler }
          text="Subtítulo"
          dataLabel="subtitle-input-label"
          dataInput="subtitle-input"
          value={ subtitle }
          name="subtitle"
        />
        <Input
          handler={ this.handler }
          text="Imagem"
          dataLabel="image-input-label"
          dataInput="image-input"
          value={ imagePath }
          name="imagePath"
        />
        <Textarea handler={ this.handler } value={ storyline } name="storyline" />
        <Rating handler={ this.handler } value={ rating } />
        <Select
          handler={ this.handler }
          text="Gênero"
          dataLabel="genre-input-label"
          dataInput="genre-input"
          genre={ genre }
          name="genre"
        />
        <button
          data-testid="send-button"
          type="submit"
          onClick={ this.handleClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}
export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
