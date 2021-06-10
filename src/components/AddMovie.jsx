import React from 'react';
import PropTypes from 'prop-types';
import Titles from './Titles';
import Subtitle from './Subtitle';
import Image from './Image';
import Sinopse from './Sinopse';
import Avaliacao from './Avaliacao';

const stateInit = {
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
    this.state = stateInit;
    this.handleClick = this.handleClick.bind(this);
    this.actualState = this.actualState.bind(this);
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(stateInit);
  }

  actualState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form
        data-testid="add-movie-form"
      >
        <Titles functionOnChange={ this.actualState } value={ title } />
        <Subtitle functionOnChange={ this.actualState } value={ subtitle } />
        <Image functionOnChange={ this.actualState } value={ imagePath } />
        <Sinopse functionOnChange={ this.actualState } value={ storyline } />
        <Avaliacao functionOnChange={ this.actualState } value={ rating } />
        <label htmlFor="genre-input-label" data-testid="genre-input-label">
          Gênero
          <select
            value={ genre }
            functionOnChange={ this.actualState }
            data-testid="genre-input"
          >
            <option
              data-testid="genre-option"
              value="action"
            >
              Ação
            </option>
            <option
              data-testid="genre-option"
              value="comedy"
            >
              Comédia
            </option>
            <option
              data-testid="genre-option"
              value="thriller"
            >
              Suspense
            </option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleClick }
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
