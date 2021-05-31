import React from 'react';
import PropTypes from 'prop-types';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};
class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onChangeHandler = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  onClickHandler = () => {
    onClick(this.state);
    this.setState(INITIAL_STATE)
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            type="text"
            value={ initialState.title }
            data-testid="title-input"
            id="title-input"
            onChange={ this.onChangeHandler }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            type="text"
            value={ initialState.subtitle }
            data-testid="subtitle-input"
            id="subtitle-input"
            onChange={ this.onChangeHandler }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            type="text"
            value={ initialState.imagePath }
            data-testid="image-input"
            id="image-input"
            onChange={ this.onChangeHandler }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            value={ initialState.storyline }
            data-testid="storyline-input"
            id="storyline-input"
            onChange={ this.onChangeHandler }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            type="number"
            value={ initialState.rating }
            data-testid="rating-input"
            id="rating-input"
            onChange={ this.onChangeHandler }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            value={ initialState.genre }
            data-testid="genre-input"
            id="genre-input"
            onChange={ this.onChangeHandler }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={() => this.onClickHandler(onClick) }>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

export default AddMovie;
