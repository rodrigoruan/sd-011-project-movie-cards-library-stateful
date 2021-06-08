import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const defaultState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.handleState = this.handleState.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(defaultState);
  }

  handleState(e) {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" action="">
        <Input alias="title" text="Título" value={ title } cb={ this.handleState } />
        <Input
          alias="subtitle"
          text="Subtítulo"
          value={ subtitle }
          cb={ this.handleState }
        />
        <Input alias="image" text="Imagem" value={ imagePath } cb={ this.handleState } />
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            data-testid="storyline-input"
            onChange={ this.handleState }
            value={ storyline }
            name="storyline"
          >
            { storyline }
          </textarea>
        </label>
        <Input alias="rating" text="Avaliação" value={ rating } cb={ this.handleState } />
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            data-testid="genre-input"
            value={ genre }
            name="genre"
            onChange={ this.handleState }
          >
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
