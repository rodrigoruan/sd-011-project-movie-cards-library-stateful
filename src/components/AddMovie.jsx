import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSend = this.handlerSend.bind(this);
    // this.resetState = this.resetState.bind(this);
  }

  handlerChange({ target }) {
    const { name, value } = target;
    this.setState = {
      [name]: value,
    };
  }

  handlerSend() {
    const { onClick } = this.props;
    const actualState = this.state;
    onClick(actualState);
  }
  
  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input
              type="text"
              data-testid="title-input"
              name="title"
              onChange={ this.handlerChange }
              value={ title }
            />
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              data-testid="subtitle-input"
              name="subtitle"
              onChange={ this.handlerChange }
              value={ subtitle }
            />
          </label>
          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              name="imagePath"
              onChange={ this.handlerChange }
              value={ imagePath }
            />
          </label>
          <label htmlFor="storyline-input" data-testid="storyline-input-label">
            Sinopse
            <textarea
              name="storyline"
              cols="30"
              rows="10"
              data-testid="storyline-input"
              onChange={ this.handlerChange }
              value={ storyline }
            />
          </label>
          <label htmlFor="rating-input" data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              data-testid="rating-input"
              name="rating"
              onChange={ this.handlerChange }
              value={ rating }
              defaultValue={ 0 }
            />
          </label>
          <label htmlFor="genre-input" data-testid="genre-input-label">
            Gênero
            <select
              name="genre"
              data-testid="genre-input"
              onChange={ this.handlerChange }
              value={ genre }
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <button data-testid="send-button" onClick={ this.handlerSend }>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
};

AddMovie.defaulProps = {
  onClick: () => {},
  title: '',
  subtitle: '',
  imagePath: '',
  rating: 0,
  genre:'',
}
