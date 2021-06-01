import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';
import StoryLine from './StoryLine';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: '',
    });
    this.onChange = this.onChange.bind(this);
    this.clearData = this.clearData.bind(this);
  }

  onChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  clearData() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: '',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Title title={ title } onChange={ this.onChange } />
        <Subtitle subtitle={ subtitle } onChange={ this.onChange } />
        <Image imagePath={ imagePath } onChange={ this.onChange } />
        <StoryLine storyLine={ storyLine } onChange={ this.onChange } />
        <label htmlFor="image-input" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            type="number"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.onChange }
          />
        </label>
        <label htmlFor="select-input" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            onChange={ this.onChange }
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => {
            this.clearData();
            onClick(this.state);
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
