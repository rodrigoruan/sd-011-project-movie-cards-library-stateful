import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
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
    this.stateSet = this.stateSet.bind(this);
  }

  stateSet() {
    const { onClick } = this.props;
    onClick();
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="text">
          Título
          <input
            value={ title }
            data-testid="title-input"
            type="text"
            onChange={ this.stateSet }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="text">
          Subtítulo
          <input
            value={ subtitle }
            data-testid="subtitle-input"
            type="text"
            onChange={ this.stateSet }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="text">
          Imagem
          <input
            value={ imagePath }
            data-testid="image-input"
            type="text"
            onChange={ this.stateSet }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="text">
          Sinopse
          <textarea
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.stateSet }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
