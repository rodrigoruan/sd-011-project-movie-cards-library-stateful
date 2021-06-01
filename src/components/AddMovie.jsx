import React from 'react';
// import PropTypes from 'prop-types';
import ButtonAddMovie from './ButtonAddMovie';
import LabelTitle from './LabelTitle';
import LabelSubtitle from './LabelSubtitle';
import LabelImage from './LabelImage';
import LabelStoryline from './LabelStoryline';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const onClick = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <LabelTitle title={ title } />
        <LabelSubtitle subtitle={ subtitle } />
        <LabelImage imagePath={ imagePath } />
        <LabelStoryline storyline={ storyline } />
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            value={ rating }
            onChange={ rating }
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select value={ genre } onChange={ genre } data-testid="genre-input">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <ButtonAddMovie onClick={ onClick } />
      </form>
    );
  }
}

export default AddMovie;
