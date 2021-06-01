import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleSubtitle from './TitleSubtitle';
import Image from './Image';
import Sinopse from './Sinopse';

export default class AddMovie extends Component {
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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
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
    const initialState = { ...this.state };
    const { subtitle, title, imagePath, storyline, rating, genre } = initialState;
    return (
      <form data-testid="add-movie-form">

        <TitleSubtitle title={ title } subtitle={ subtitle } chg={ this.handleChange } />
        <Image img={ imagePath } chg={ this.handleChange } />
        <Sinopse sinopse={ storyline } chg={ this.handleChange } />

        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            name="rating"
            type="number"
            data-testid="rating-input"
            value={ rating }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          value={ this.state }
          onClick={ (e) => {
            const { onClick } = this.props;
            e.preventDefault();
            onClick(this.state);
            this.handleSubmit();
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
