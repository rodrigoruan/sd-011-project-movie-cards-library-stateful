import React from 'react';
import PropTypes from 'prop-types';
import Titles from './Titles';
import Subtitle from './Subtitle';
import Image from './Image';
import Gender from './Gender';

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
    const state = this;
    onClick(state);
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
        <Titles functionOnChange={ this.addState } value={ title } />
        <Subtitle functionOnChange={ this.addState } value={ subtitle } />
        <Image functionOnChange={ this.addState } value={ imagePath } />
        <label
          htmlFor="storyline-input-label"
          data-testid="storyline-input-label"
        >
          Sinopse
          <textarea
            value={ storyline }
            data-testid="storyline-input"
          />
        </label>
        <label
          htmlFor="rating-input-label"
          data-testid="rating-input-label"
        >
          Avaliação
          <input
            name="rating"
            value={ rating }
            type="number"
            data-testid="rating-input"
          />
        </label>
        <Gender functionOnChange={ this.addState } value={ genre } />
        <button
          type="button"
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
