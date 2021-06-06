import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './AddMoviesComp/Title';
import Subtitle from './AddMoviesComp/Subtitle';
import Imagepath from './AddMoviesComp/Imagepath';
import Storyline from './AddMoviesComp/Storyline';
import Rating from './AddMoviesComp/Rating';
import Genre from './AddMoviesComp/Genre';
/*
aqui o caldo engrossa um pouco
componente AddMovies:
-> responsavel por renderizar varios componentes separados
-> foi feito dessa forma pois de inicio tentei colocar todos nesse mesmo componente mas o lint nao permitiu um render tão grande
*/
/*
aqui criamos o contrutor e setamos alguns stados iniciais para esse componente
*/
class AddMovie extends Component {
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

    // aqui bindamos as duas funçoes que temos para termos acesso ao this dentro do render com as funções

    this.handleChange = this.handleChange.bind(this);
    this.sendSubmit = this.sendSubmit.bind(this);
  }

  // função handleChange padrao:
  // passamos como paramentro o event.target e fazemos uma desconstrução
  // capturamos os valores name e value via desconstrução e setamos o state usando o nome do elemento e o valor dele
  // assim ele passa a ser um elemento controlado

  handleChange({ target }) {
    const { name } = target;
    const { value } = target;
    this.setState({
      [name]: value,
    });
  }
  // função sendSubmit:
  // Executa a callback passada para o componente AddMovie via props, chamada onClick, que recebe como parâmetro o estado atual depois seta o estado de novo para o inicial

  sendSubmit() {
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

  // no render recebemos o estado e renderizamos todos os dados referentes aos filmes passando via props para cada um dos componentes que crie para nao deixar o render muito extenso
  // passo como props o estado exemplo (titulo) e a função handleChnage para que possa ser feito a alteração do estado pelo filho

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Title title={ title } handleChange={ this.handleChange } />

          <Subtitle subtitle={ subtitle } handleChange={ this.handleChange } />

          <Imagepath imagePath={ imagePath } handleChange={ this.handleChange } />

          <Storyline storyline={ storyline } handleChange={ this.handleChange } />

          <Rating rating={ rating } handleChange={ this.handleChange } />

          <Genre genre={ genre } handleChange={ this.handleChange } />

          {/* aqui crio o botão onde passo a função onClick via props */}
          <button
            data-testid="send-button"
            type="button"
            onClick={ this.sendSubmit }
          >
            Adicionar filme
          </button>
        </form>
      </div>

    );
  }
}
export default AddMovie;
// mais uma vez faço a validação da props via propTypes
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
