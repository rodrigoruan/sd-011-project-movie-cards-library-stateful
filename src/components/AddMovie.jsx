// implement AddMovie component here
// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubTitle from './InputSubTitle';
import InputImage from './InputImage';
import InputStoryLine from './InputStoryLine';
import '../css/Movie.css';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleValue = this.handleValue.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
  }

  handleValue({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  buttonClick(event) {
    const { onClick } = this.props;
    onClick(this.state, event);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form" className="add-movie-container">
          <h5>Incluir Filme</h5>
          <InputTitle title={ title } handleValue={ this.handleValue } />

          <InputSubTitle subtitle={ subtitle } handleValue={ this.handleValue } />

          <InputImage imagePath={ imagePath } handleValue={ this.handleValue } />

          <InputStoryLine storyline={ storyline } handleValue={ this.handleValue } />

          <label htmlFor="ex12" data-testid="rating-input-label">
            Avaliação
            <input
              id="ex12"
              type="number"
              value={ rating }
              data-testid="rating-input"
              name="rating"
              onChange={ this.handleValue }
              className="add-movie-rating"
            />
          </label>
          <label htmlFor="ex13" data-testid="genre-input-label">
            Gênero
            <select
              id="ex13"
              value={ genre }
              name="genre"
              onChange={ this.handleValue }
              data-testid="genre-input"
              className="add-movie-inputs"
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <button
            type="submit"
            data-testid="send-button"
            onClick={ (event) => this.buttonClick(event) }
            className="add-movie-button"
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequire;

export default AddMovie;
