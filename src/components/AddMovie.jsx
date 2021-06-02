import React from 'react';
import PropTypes from 'prop-types';

import InputText from './InputText';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      movies: props.movies,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormClick = this.handleFormClick.bind(this);
  }

  handleInputChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleFormClick(event) {
    const { movies } = this.props;
    movies.push(this.state);
    // console.log(movies);
    // console.log(this.state);
    event.preventDefault();
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <InputText
            title={ title }
            subtitle={ subtitle }
            imagePath={ imagePath }
            storyline={ storyline }
            rating={ rating }
            handleInputChange={ this.handleInputChange }
          />
          <label data-testid="rating-input-label" htmlFor="rating">
            Avaliação:
            <input
              data-testid="rating-input"
              type="number"
              name="rating"
              onChange={ this.handleInputChange }
              value={ rating }
            />
          </label>
          <label data-testid="genre-input-label" htmlFor="genre">
            Gênero:
            <select
              data-testid="genre-input"
              name="genre"
              onChange={ this.handleInputChange }
              value={ genre }
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <input
            data-testid="send-button"
            type="submit"
            onClick={ this.handleFormClick }
          />
        </form>
      </div>
    );
  }
}
AddMovie.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
