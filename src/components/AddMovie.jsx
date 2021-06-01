import React from 'react';
/* import PropTypes from 'prop-types'; */
import Genre from './Genre';
import Storyline from './Storyline';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.initialValue = this.initialValue.bind(this);
  }

  initialValue(evento) {
    const { target } = evento;
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  render() {
    const { subtitle, title, imagePath, rating, storyline, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            value={ title }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            value={ imagePath }
            data-testid="image-input"
          />
        </label>
        <Storyline initialValue={ this.initialValue } value={ storyline } />
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="text"
            name="rating"
            value={ rating }
            data-testid="rating-input"
          />
        </label>
        <Genre initialValue={ this.initialValue } value={ genre } />
      </form>
    );
  }
}

/* AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: 'undefined',
};
 */
export default AddMovie;
