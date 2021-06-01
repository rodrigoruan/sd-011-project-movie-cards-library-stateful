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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const onClick = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <LabelTitle title={ title } handleChange={ this.handleChange } />
        <LabelSubtitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <LabelImage imagePath={ imagePath } handleChange={ this.handleChange } />
        <LabelStoryline storyline={ storyline } handleChange={ this.handleChange } />
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            type="number"
            value={ rating }
            onChange={ this.handleChange }
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            onChange={ this.handleChange }
            data-testid="genre-input"
          >
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
