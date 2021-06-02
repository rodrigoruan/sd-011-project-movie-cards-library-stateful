import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import SelectedGenre from './SelectedGenre';
import Avaliation from './Avaliation';
import Sinopse from './Sinopse';

const inicialEstado = {

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
    this.handlerChange = this.handlerChange.bind(this);
    this.returnStateInit = this.returnStateInit.bind(this);

    this.state = inicialEstado;
  }

  handlerChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  returnStateInit() {
    this.setState(inicialEstado);
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="text1" data-testid="title-input-label">
          Título
          <input
            id="text1"
            data-testid="title-input"
            type="text"
            name="title"
            value={ title }
            onChange={ this.handlerChange }
          />
        </label>
        <label htmlFor="text2" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="text2"
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ this.handlerChange }
          />
        </label>
        <label htmlFor="text3" data-testid="image-input-label">
          Imagem
          <input
            id="text3"
            data-testid="image-input"
            type="text"
            name="imagePath"
            value={ imagePath }
            onChange={ this.handlerChange }
          />
        </label>
        <Sinopse storyline={ storyline } handlerChange={ this.handlerChange } />
        <Avaliation rating={ rating } handlerChange={ this.handlerChange } />
        <SelectedGenre genre={ genre } handlerChange={ this.handlerChange } />
        <Button onClick={ onClick } returnStateInit={ this.returnStateInit } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
