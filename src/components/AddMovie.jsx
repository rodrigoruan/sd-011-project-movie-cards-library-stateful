import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label } from './Label';
import { Select } from './Select';

//  Estado inicial pra resetar quando clicar no botão.
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
    //  Passo ao state inicial o objeto criado acima.
    this.state = initialState;
    this.handleClick = this.handleClick.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  //  Recebido uma função por props do MovieLibrary, para criar um novo filme e resetar o state antigo, adicionada ao botão.
  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  //  Função para alterar o state dos inputs, checkbox...
  changeState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    //  Desestruturado as propriedades do state pra usar elas nos inputs.
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Label // Componente que cria o input de título
          name="title"
          title="Título"
          change={ this.changeState }
          value={ title }
        />
        <Label // Componente que cria o input de subtítulo
          name="subtitle"
          title="Subtítulo"
          change={ this.changeState }
          value={ subtitle }
        />
        <Label // Componente que cria o input de imagem
          name="imagePath"
          title="Imagem"
          change={ this.changeState }
          value={ imagePath }
        />
        <Label // Componente que cria o input de sinopse
          name="storyline"
          title="Sinopse"
          change={ this.changeState }
          value={ storyline }
        />
        <Label // Componente que cria o input de rating
          name="rating"
          title="Avaliação"
          change={ this.changeState }
          value={ rating }
        />
        <Select genre={ genre } changeState={ this.changeState } />
        <button // Botão que ao ser clicado adicionará um novo filme.
          type="button"
          onClick={ this.handleClick }
          data-testid="send-button"
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
