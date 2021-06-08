import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';

const defaultState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.handleGenre = this.handleGenre.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(defaultState);
  }

  handleGenre({ target }) {
    console.log(target.value);
    this.setState({ genre: target.value });
  }

  handleState(e) {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" action="">
        <Label alias="title" text="Título" value={ title } func={ this.handleState } />
        <Label
          alias="subtitle"
          text="Subtítulo"
          value={ subtitle }
          func={ this.handleState }
        />
        <Label
          alias="image"
          text="Imagem"
          value={ imagePath }
          func={ this.handleState }
        />
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            data-testid="storyline-input"
            onChange={ this.handleState }
          >
            { storyline }
          </textarea>
        </label>
        <Label
          alias="rating"
          text="Avaliação"
          value={ rating }
          func={ this.handleState }
        />
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select data-testid="genre-input" value={ genre } onChange={ this.handleGenre }>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.handleClick }
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

export default AddMovie;
