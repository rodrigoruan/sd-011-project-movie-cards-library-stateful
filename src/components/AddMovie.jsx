import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import InputStoryline from './InputStoryline';
import InputNum from './InputNum';
import Select from './Select';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleInfo = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(({
      [name]: value,
    }));
  }

  handleClick = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          onChange={ this.handleInfo }
          text="Título"
          dataLabel="title-input-label"
          dataInput="title-input"
          value={ title }
          name="title"
        />
        <Input
          onChange={ this.handleInfo }
          text="Subtítulo"
          dataLabel="subtitle-input-label"
          dataInput="subtitle-input"
          value={ subtitle }
          name="subtitle"
        />
        <Input
          onChange={ this.handleInfo }
          text="Imagem"
          dataLabel="image-input-label"
          dataInput="image-input"
          value={ imagePath }
          name="imagePath"
        />
        <InputStoryline value={ storyline } onChange={ this.handleInfo } />
        <InputNum value={ rating } onChange={ this.handleInfo } />
        <Select genre={ genre } onChange={ this.handleInfo } name="genre" />
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
export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
