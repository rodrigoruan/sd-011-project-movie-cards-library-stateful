import React from 'react';
import PropTypes from 'prop-types';
import SelectToAddMovies from './FormsToAddMovies/SelectToAddMovies';
import Rating from './Rating';

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
    this.reset = this.reset.bind(this);
  }

  handleStates({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  reset() {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="subtitle-input-label" htmlFor="title">
          Título
          <input
            id="title"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleStates }
          />
        </label>
        <label data-testid="title-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            id="subtitle"
            data-testid="subtitle-input"
            onChange={ subtitle }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="img">
          Imagem
          <input id="img" data-testid="image-input" onChange={ imagePath } />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            id="storyline"
            data-testid="storyline-input"
            onChange={ storyline }
          />
        </label>
        <Rating onChange={ rating } />
        <SelectToAddMovies value={ genre } onChange={ handleStates } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => { onClick(this.state); this.reset(); } }
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
