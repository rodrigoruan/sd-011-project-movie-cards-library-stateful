// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Sinopse from './Sinopse';
import Avaliacao from './Avaliacao';
import SelectGenre from './SelectGenre';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.changeInputs = this.changeInputs.bind(this);
    this.resetInputs = this.resetInputs.bind(this);
  }

  changeInputs({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // requisito 14
  resetInputs() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    // const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="addMovie" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            onChange={ this.changeInputs }
            type="text"
            name="title"
            value={ title }
          />
        </label>
        <label htmlFor="addMovie" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            onChange={ this.changeInputs }
            type="text"
            name="subtitle"
            value={ subtitle }
          />
        </label>
        <label htmlFor="addMovie" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            onChange={ this.changeInputs }
            type="text"
            name="imagePath"
            value={ imagePath }
          />
        </label>
        <Sinopse value={ storyline } changeInputs={ this.changeInputs } />
        <Avaliacao value={ rating } changeInputs={ this.changeInputs } />
        <SelectGenre value={ genre } changeInputs={ this.changeInputs } />
        <button data-testid="send-button" type="button" onClick={ this.resetInputs }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: () => {},
};
