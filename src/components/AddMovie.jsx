import React from 'react';
import PropTypes from 'prop-types';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import ImagePath from './components/ImagePath';
import Storyline from './components/Storyline';

const emptyState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};
class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = emptyState;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  reset() {
    this.setState = emptyState;
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.props;
    return (
      <form className="form2" data-testid="add-movie-form">
        <Title title={ title } handleChange={ this.handleChange } />
        <Subtitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <ImagePath imagePath={ imagePath } handleChange={ this.handleChange } />
        <Storyline storyline={ storyline } handleChange={ this.handleChange } />

        <label htmlFor="rating-label" data-testid="rating-input-label">
          Avaliação
          <input
            className="addMovie-inputs"
            name="rating"
            value={ rating }
            type="number"
            max="5"
            step="0.1"
            data-testid="rating-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="label-genre" data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          className="btn-adicionar"
          data-testid="send-button"
          onClick={ () => {
            onClick(emptyState);
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
  onClick: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
};

AddMovie.defaultProps = {
  onClick: () => {},
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default AddMovie;
