import React from 'react';
import PropTypes from 'prop-types';
import Titles from './Titles';
import Subtitle from './Subtitle';
import Image from './Image';
import Sinopse from './Sinopse';
import Avaliacao from './Avaliacao';
import GenreInput from './GenreInput';

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
    const { state } = this;
    onClick(state);
    this.setState(stateInit);
  }

  actualState(event) {
    const { name, value } = event.target;
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
        <Titles onChange={ this.actualState } value={ title } />
        <Subtitle onChange={ this.actualState } value={ subtitle } />
        <Image onChange={ this.actualState } value={ imagePath } />
        <Sinopse onChange={ this.actualState } value={ storyline } />
        <Avaliacao onChange={ this.actualState } value={ rating } />
        <GenreInput onChange={ this.actualState } value={ genre } />
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
