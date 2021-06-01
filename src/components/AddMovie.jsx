import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Imagepath from './ImagePath';
import Subtitle from './Subtitle';
import Storyline from './Storyline';
import InputRating from './InputRating';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    const initialStage = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.state = initialStage;
    this.toInitialStage = this.toInitialStage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.buttonOnClick = this.buttonOnClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checked' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  toInitialStage() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  buttonOnClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.toInitialStage();
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } handleChange={ this.handleChange } />
        <Subtitle value={ subtitle } handleChange={ this.handleChange } />
        <Imagepath value={ imagePath } handleChange={ this.handleChange } />
        <Storyline value={ storyline } handleChange={ this.handleChange } />
        <InputRating value={ rating } handleChange={ this.handleChange } />

        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">
              Ação
            </option>
            <option value="comedy" data-testid="genre-option">
              Comédia
            </option>
            <option value="thriller" data-testid="genre-option">
              Suspense
            </option>
          </select>
        </label>

        <button
          data-testid="send-button"
          onClick={ this.buttonOnClick }
          type="reset"
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
