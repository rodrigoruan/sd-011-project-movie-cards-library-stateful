import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnclick = this.handleOnclick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleOnclick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form className="form2" data-testid="add-movie-form">
          <Title value={ title } handleChange={ this.handleChange } />
          <Subtitle value={ subtitle } handleChange={ this.handleChange } />
          <ImagePath value={ imagePath } handleChange={ this.handleChange } />
          <Storyline value={ storyline } handleChange={ this.handleChange } />
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
              genre={ genre }
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
            onClick={ this.handleOnclick }
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
};

AddMovie.defaultProps = {
  onClick: () => {},
};

export default AddMovie;
