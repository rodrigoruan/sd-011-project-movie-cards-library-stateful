// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import TextArea from './TextArea';
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
          handler={ this.handleInfo }
          text="Título"
          dataLabel="title-input-label"
          dataInput="title-input"
          value={ title }
          name="title"
        />
        <Input
          handler={ this.handleInfo }
          text="Subtítulo"
          dataLabel="subtitle-input-label"
          dataInput="subtitle-input"
          value={ subtitle }
          name="subtitle"
        />
        <Input
          handler={ this.handleInfo }
          text="Imagem"
          dataLabel="image-input-label"
          dataInput="image-input"
          value={ imagePath }
          name="imagePath"
        />
        <TextArea value={ storyline } handler={ this.handleInfo } />
        <InputNum value={ rating } handler={ this.handleInfo } />
        <Select value={ genre } handler={ this.handleInfo } />
        <button
          data-testid="send-button"
          type="submit"
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
