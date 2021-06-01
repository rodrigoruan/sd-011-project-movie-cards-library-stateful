import React, { Component } from 'react';
/* import PropTypes from 'prop-types'; */
import InputTextField from './InputTextField';
import TextareaField from './TextareaField';
import GenreCheck from './GenreCheck';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleState = this.handleState.bind(this);
    this.resetBtn = this.resetBtn.bind(this);
  }

  // atribui valor do input
  handleState(target) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  addNewMovie() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    /* const { onClick } = this.props; */
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form>
        <InputTextField
          type="text"
          name="title"
          text="Título"
          value={ title }
          onChange={ this.handleState }
        />
        <InputTextField
          type="text"
          name="subtitle"
          text="Subtítulo"
          value={ subtitle }
          onChange={ this.handleState }
        />
        <InputTextField
          type="text"
          name="imagePath"
          text="Imagem"
          value={ imagePath }
          onChange={ this.handleState }
        />
        <TextareaField
          name="storyline"
          text="Sinopse"
          value={ storyline }
          onChange={ this.handleState }
        />
        <InputTextField
          type="number"
          name="rating"
          text="Avaliação"
          value={ rating }
          onChange={ this.handleState }
        />
        <GenreCheck
          name="genre"
          text="Filtrar por gênero"
          value={ genre }
          onChange={ this.handleState }
        />
      </form>
    );
  }
}
export default AddMovie;

/* AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: () => { },
}; */
