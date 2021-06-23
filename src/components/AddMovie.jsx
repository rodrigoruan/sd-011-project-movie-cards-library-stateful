import React from 'react';
import PropTypes from 'prop-types';
import Titulo from './Titulo';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.saveState = this.saveState.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  addUpdateState= () => {
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

  saveState =({ target }) => {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  render() {
    const { title, subtitle, storyline, imagePath, rating, genre } = this.state;
    const algumaCoisa = title + subtitle + imagePath + genre + storyline;
    return (
      <form data-testid="add-movie-form">
        <Titulo algo={ algumaCoisa } />
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            data-testid="rating-input"
            value={ rating }
            onChange={ this.saveState }
          />
        </label>
        <label htmlFor="select" data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            value={ genre }
            onChange={ this.saveState() }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.addUpdateState() }
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
