import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  // constructor

  // this.state
  // subtitle: PropTypes.string,
  // title: PropTypes.string,
  // imagePath: PropTypes.string,
  // storyline: PropTypes.string,
  // rating: PropTypes.number,
  // genre: PropTypes.string,

  // defaultstate
  // subtitle: '',
  // title: '',
  // imagePath: '',
  // storyline: '',
  // rating: 0,
  // genre: 'action',

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input type="text" data-testid="title-input" />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" data-testid="subtitle-input" />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea data-testid="storyline-input" />
        </label>
        <label htmlFor="storyline-input" data-testid="genre-input-label">
          Gênero
          <select data-testid="genre-input">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  // onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: '()',
};

export default AddMovie;
