import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lab from './Titulo';

export default class AddMovie extends Component {
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
    this.change = this.change.bind(this);
  }

  setMovie() {
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

  change(e) {
    const { name, value } = e.target;
    this.setState((oldState) => ({ ...oldState, [name]: value }));
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Lab name="title" dtid="title-input-label" arr={ [title, this.change] }>
            Título
          </Lab>
          <Lab
            name="subtitle"
            dtid="subtitle-input-label"
            arr={ [subtitle, this.change] }
          >
            Subtítulo
          </Lab>
          <Lab name="imagePath" dtid="image-input-label" arr={ [imagePath, this.change] }>
            Imagem
          </Lab>
          <Lab
            name="storyline"
            dtid="storyline-input-label"
            arr={ [storyline, this.change] }
          >
            Sinopse
          </Lab>
          <Lab name="rating" dtid="rating-input-label" arr={ [rating, this.change] }>
            Avaliação
          </Lab>
          <Lab name="genre" dtid="genre-input-label" arr={ [genre, this.change] }>
            Gênero
          </Lab>
          <button
            type="button"
            onClick={ () => this.setMovie() }
            data-testid="send-button"
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = PropTypes.func.isRequired;
