import React from 'react';
import InputTitlemovie from './InputTitleMovie';
import InputSubTitlemovie from './InputSubTitleMovie';
import InputTextArea from './InputTextArea';
import InputImage from './InputImage';
import InputNumber from './InputNumber';
import InputSelect from './InputSelect';

const InitialState = {
  title: '',
  subtitle: '',
  storyline: '',
  rating: 0,
  imagePath: '',
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = InitialState;

    this.hadleState = this.hadleState.bind(this);
    this.onclick = this.onclick.bind(this);
  }

  onclick() {
    this.setState = InitialState;
  }

  hadleState({ target }) {
    const { name, value } = target;
    this.setState(() => ({ [name]: value }));
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    // Recebe uma callback no onClik que é enviada por searchBar.
    // Esse componente vai criar campos de input para um novo filme. Esses valores ficarão no state do Addmovie., ou seja, todos os inputs devem alterar o state do AddMovie
    // Quando clicacr no botão o mesmo deve adicionar uma nova tag de filme na lista de filmes que fica no state no searchbar para que searche bar mande para a biblioteca renderizar.
    return (
      <form data-testid="add-movie-form">
        <InputTitlemovie
          title={ title }
          hadleState={ this.hadleState }
        />

        <br />
        <InputSubTitlemovie
          subtitle={ subtitle }
          hadleState={ this.hadleState }
        />
        <br />
        <InputImage
          imagePath={ imagePath }
          hadleState={ this.hadleState }
        />
        <br />
        <InputTextArea
          storyline={ storyline }
          hadleState={ this.hadleState }
        />
        <br />
        <InputNumber
          rating={ rating }
          hadleState={ this.hadleState }
        />
        <br />
        <InputSelect
          genre={ genre }
          hadleState={ this.hadleState }
        />
        <button data-testid="send-button" type="submit" onClick={ onclick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
