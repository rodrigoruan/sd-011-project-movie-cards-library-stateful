import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import Rating from './Rating';
import StoryLine from './StoryLine';
import Subtitle from './Subtitle';
import Title from './Titulo';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handlerChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } handlerChange={ this.handlerChange } />
        <Subtitle value={ subtitle } handlerChange={ this.handlerChange } />
        <Image value={ imagePath } handlerChange={ this.handlerChange } />
        <StoryLine value={ storyline } handlerChange={ this.handlerChange } />
        <Rating value={ rating } handlerChange={ this.handlerChange } />
        <label htmlFor="image-input" data-testid="genre-input-label">
          Gênero
          <select
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handlerChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => {
            onClick(this.state);
            this.reset();
          } }
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
