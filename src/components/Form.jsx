import React, { Component } from 'react';

export default class Form extends Component {
   render() {
    const { func, addMovie } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre  } = this.props.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input"> "Título"
        </label>
        <input
          type="text"
          name="title"
          data-testid="title-input"
          value={title}
          onChange={func}
        />
        
        <label data-testid="subtitle-input-label"> "Subtítulo"
          <input
          type='text'
          name="subtitle"
          data-testid="subtitle-input"
          value={subtitle}
          onChange={func}
          />
        </label>

        <label data-testid="image-input-label"> "Imagem"
          <input
          type='text'
          name="imagePath"
          data-testid="image-input"
          value={imagePath}
          onChange={func}
          />
        </label>

        <label data-testid="storyline-input-label"> "Sinopse"
          <textarea
          name="storyline"
          data-testid="storyline-input"
          onChange={func}
          />
        </label>

        <label data-testid="rating-input-label"> "Avaliação"
          <input
            type='number'
            name="rating"
            data-testid="rating-input" 
            value={rating}
            onChange={func}
          />
        </label>

        <label data-testid="genre-input-label"> "Gênero"
          <select
          name="genre"
          data-testid="genre-input" 
          onChange={func}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>

          <button data-testid="send-button" 
          onClick={addMovie}
          type="submit">
            Adicionar filme
          </button>
        </label>
      </form>
    );
  }
}
