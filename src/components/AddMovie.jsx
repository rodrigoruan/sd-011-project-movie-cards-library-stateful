import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewInp from './NewInputs';

export default class AddMovie extends Component {
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

    this.hndChg = this.hndChg.bind(this);
  }

  hndChg({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">

        <NewInp key={ title } inTp="text" lbTx="Título" hndChg={ this.hndChg } />

        <NewInp key={ subtitle } inTp="text" lbTx="Subtítulo" hndChg={ this.hndChg } />

        <NewInp key={ imagePath } inTp="text" lbTx="Imagem" hndChg={ this.hndChg } />

        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handlChng }
          />
        </label>

        <NewInp key={ rating } inTp="number" lbTx="Avaliação" hndChg={ this.hndChg } />

        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handlChng }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          value={ this.state }
          onClick={ () => onClick.addMovie }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
