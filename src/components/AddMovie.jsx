// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from './AddMovieComponents/Image';
import SubTitle from './AddMovieComponents/SubTitle';
import Title from './AddMovieComponents/Title';
import Storyline from './AddMovieComponents/Storyline';
import Rating from './AddMovieComponents/Rating';
import Genre from './AddMovieComponents/Genre';

export default class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.changeState = this.changeState.bind(this);
    this.pushMovie = this.pushMovie.bind(this);
    this.initialState = this.state;
  }

  // componentDidUpdate() { // Verificar se o estado foi alterado mesmo
  //   console.log('Após algum atualização de estado, veja ABAIXO o "this.state" ');
  //   console.log(this.state);
  // }

  changeState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    // console.log('Abaixo temos o this'); // Só pra teste
    // console.log(this);
  }

  // pushMovie() {
  //   const { onClick } = this.props;
  //   onClick(this.state);

  pushMovie(umaCallback) { // Outra maneira de fazer com button comentado em return
    umaCallback(this.state);

    // this.setState({ // Só pra teste de estado
    //   title: 'teste',
    //   subtitle: 'to com fome',
    //   imagePath: 'beleza',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action',
    // });
    this.setState(this.initialState);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props; // Outra forma de executar a callback passando ao Button comentado abaixo
    return (
      <div>
        <form action="" data-testid="add-movie-form">
          <Title defaultValue={ title } onChange={ this.changeState } />
          <SubTitle defaultValue={ subtitle } onChange={ this.changeState } />
          <Image defaultValue={ imagePath } onChange={ this.changeState } />
          <Storyline defaultValue={ storyline } onChange={ this.changeState } />
          <Rating defaultValue={ rating } onChange={ this.changeState } />
          <Genre defaultValue={ genre } onChange={ this.changeState } />
          {/* <button
            type="button"
            data-testid="send-button"
            onClick={ this.pushMovie }
          >
            Adicionar filme
          </button> */}
          <button
            type="button"
            data-testid="send-button"
            onClick={ () => this.pushMovie(onClick) }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
