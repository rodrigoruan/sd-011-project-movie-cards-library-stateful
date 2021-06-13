import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Storyline from './Storyline';
import RatingComponent from './RatingComponent';
import Genre from './Genre';

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
    this.handleState = this.handleState.bind(this);
    this.onClickComand = this.onClickComand.bind(this);
  }

  handleState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  onClickComand() {
    const { onClick } = this.props;
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            name="title"
            type="text"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleState }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleState }
          />
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            type="text"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.handleState }
          />
        </label>
        <Storyline value={ storyline } onChange={ this.handleState } />
        <RatingComponent value={ rating } onChange={ this.handleState } />
        <Genre value={ genre } onChange={ this.handleState } />
        <button type="button" data-testid="send-button" onClick={ this.onClickComand }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = ({
  onClick: PropTypes.func,
}).isRequired;

export default AddMovie;
