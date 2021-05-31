import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovieTitle from './AddMovieTitle';
import AddMovieSTitle from './AddMovieSTitle';
import AddMovieImg from './AddMovieImg';
import AddMovieStoryL from './AddMovieStoryL';
import AddMovieRate from './AddMovieRate';
import AddMovieSelect from './AddMovieSelect';
import AddMovieBttn from './AddMovieBttn';

export default class AddMovie extends Component {
  constructor() {
    super();
    // Define os estados inciais do componente
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.eventHandler = this.eventHandler.bind(this);
  }

  eventHandler({ target }) {
    // Função para alterar o estado de acordo com os eventos passados nos elementos do form
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // Props recebida
    const { onClick } = this.props;
    // State destructuring
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    // Cada elemento do forms está separado em componentes diferentes
    return (
      <div>
        <form data-testid="add-movie-form">
          <AddMovieTitle event={ this.eventHandler } valueProp={ title } />
          <AddMovieSTitle event={ this.eventHandler } valueProp={ subtitle } />
          <AddMovieImg event={ this.eventHandler } valueProp={ imagePath } />
          <AddMovieStoryL event={ this.eventHandler } valueProp={ storyline } />
          <AddMovieRate event={ this.eventHandler } valueProp={ rating } />
          <AddMovieSelect event={ this.eventHandler } valueProp={ genre } />
          <AddMovieBttn event={ onClick } />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
