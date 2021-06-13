import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Subtitle from './Subtitle';
import Storyline from './Storyline';
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
    this.clickComand = this.clickComand.bind(this);
  }

  handleState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  clickComand() {
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
        <Subtitle value={ subtitle } handleState={ this.handleState } />
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
        <Storyline value={ storyline } handleState={ this.handleState } />
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            type="number"
            data-testid="rating-input"
            value={ rating }
            onChange={ this.handleState }
          />
        </label>
        <Genre value={ genre } handleState={ this.handleState } />
        <button type="button" data-testid="send-button" onClick={ this.clickComand }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: () => {},
};

export default AddMovie;
