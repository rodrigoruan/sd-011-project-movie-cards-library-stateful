import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImagePath from './InputImagePath';
import InputSipnose from './InputSipnose';
import InputRating from './InputRating';
import InputSelect from './InputSelect';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor() {
    super();

    this.state = initialState;
    this.handleChanges = this.handleChanges.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
  }

  handleChanges({ target }) {
    const { value } = target;
    const name = target.name === 'image' ? 'imagePath' : target.name;
    this.setState({
      [name]: value,
    });
  }

  saveMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } handleChanges={ this.handleChanges } />
        <InputSubtitle value={ subtitle } handleChanges={ this.handleChanges } />
        <InputImagePath value={ imagePath } handleChanges={ this.handleChanges } />
        <InputSipnose value={ storyline } handleChanges={ this.handleChanges } />
        <InputRating value={ rating } handleChanges={ this.handleChanges } />
        <InputSelect value={ genre } handleChanges={ this.handleChanges } />
        <button type="button" onClick={ this.saveMovie } data-testid="send-button">
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
  onClick: () => {},
};

export default AddMovie;
