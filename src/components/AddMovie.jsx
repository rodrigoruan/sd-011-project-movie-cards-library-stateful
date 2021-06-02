import React from 'react';
import PropTypes from 'prop-types';
import SelectToAddMovies from './SelectToAddMovies';
import LabelRating from './LabelRating';

class AddMovies extends React.Component {
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
    this.handleStates = this.handleStates.bind(this);
    this.buttonAddMovies = this.buttonAddMovies.bind(this);
  }

  handleStates({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  buttonAddMovies() {
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

  // addAtributes(inputName, inputType, inputValue) {
  //   return (
  //     <input
  //       name={ inputName }
  //       type={ inputType }
  //       value={ inputValue }
  //       data-testId={ inputName === 'imagePath' ? 'image-input' : `${inputName}-input` }
  //       onChange={ this.handleStates }
  //     />
  //   );
  // }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            name="title"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleStates }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            name="subtitle"
            data-testid="subtitle-input"
            onChange={ subtitle }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input name="img" data-testid="image-input" onChange={ imagePath } />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            onChange={ storyline }
          />
        </label>
        <LabelRating rating={ rating } handleStates={ this.handleStates } />
        <SelectToAddMovies value={ genre } onChange={ this.handleStates } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => onClick(this.state) }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovies;

AddMovies.propTypes = {
  onClick: PropTypes.func,
};
AddMovies.defaultProps = {
  onClick: () => {},
};
