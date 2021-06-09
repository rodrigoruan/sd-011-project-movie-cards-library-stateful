// Requisito realizado com consultas aos sites:
// https://www.youtube.com/watch?v=99cWTot8bFc
// https://stackoverflow.com/questions/12894169/what-is-the-html-for-attribute-in-label
// https://app.betrybe.com/course/live-lectures/sd-cohort-8#aula-122-formularios-em-react
// https://reactjs.org/docs/forms.html
// Baseada na resolução do arquivo SearchBar.jsx
import React from 'react';

class AddMovie extends React.Component {
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
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input type="number" data-testid="rating-input" />
        </label>
        <label htmlFor="storyline-input" data-testid="genre-input-label">
          Gênero
          <select data-testid="genre-input">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="button" data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.defaultProps = {
  onClick: '()',
};

export default AddMovie;
