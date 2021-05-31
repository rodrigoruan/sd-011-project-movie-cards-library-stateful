import React from 'react';
import PropTypes from 'prop-types';

import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import InputRating from './InputRating';

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
    this.setState(INITIAL_STATE);
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ initialState.title } handleChange={ this.onChangeHandler } />
        <InputSubtitle
          value={ initialState.subtitle }
          handleChange={ this.onChangeHandler }
        />
        <InputImage
          value={ initialState.imagePath }
          handleChange={ this.onChangeHandler }
        />
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            value={ initialState.storyline }
            data-testid="storyline-input"
            onChange={ this.onChangeHandler }
          />
        </label>
        <InputRating
          value={ initialState.imagePath }
          handleChange={ this.onChangeHandler }
        />
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            value={ initialState.genre }
            data-testid="genre-input"
            onChange={ this.onChangeHandler }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => this.onClickHandler(onClick) }
        >
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
  onClick: 'undefined',
};

export default AddMovie;
