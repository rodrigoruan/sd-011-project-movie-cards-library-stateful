import React from 'react';
import InputTitleNovie from './InputTitleMovie';
import InputSubTitleNovie from './InputSubTitleMovie';
import InputTextArea from './InputTextArea';
import InputImage from './InputImage';
import InputNumber from './InputNumber';
import InputSelect from './InputSelect';

const InitialState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = InitialState;

    // this.hadleState = this.handleButton.bind(this);
    this.hadleState = this.hadleState.bind(this);
  }

  // handleButton() {
  //   this.setState(() => ({
  //     title: '',
  //     subtitle: '',
  //     imagePath: '',
  //     storyline: '',
  //     rating: 0,
  //     genre: 'action',
  //   }));
  // }

  hadleState({ target }) {
    const { name, value } = target;

    this.setState(() => ({
      [name]: value,
    }));
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    // Recebe uma callback no onClik que é enviada por searchBar. 
    // Esse componente vai criar campos de input para um novo filme. Esses valores ficarão no state do Addmovie., ou seja, todos os inouts devem alterar o state do AddMovie
    // Quando clicacr no botão o mesmo deve adicionar uma nova tag de filme na lista de filmes que fica no state no searchbar para que searche bar mande para a biblioteca renderizar.
    return (
      <form data-testid="add-movie-form">
        <InputTitleNovie
          title={ title }
          hadleState={ this.hadleState }
        />

        <br />
        <InputSubTitleNovie
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
        <button data-testid="send-button" type="submit">
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
