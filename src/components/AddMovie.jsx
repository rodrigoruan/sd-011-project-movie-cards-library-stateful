// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import LabelInputs from './LabelInputs';
import RatingInput from './RatingInput';
import ButtonAddMovie from './ButtonAddMovie';

const state0 = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};
class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = state0;
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }
  submit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    const { title, subtitle, storyline, imagePath, rating, genre } = this.state;
    onClick({ title, subtitle, storyline, imagePath, rating, genre });
    this.setState(this.initialState);
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, rating } = this.state;
    return (
      <div>
      <form method={ onClick } data-testid="add-movie-form">
        <LabelInputs
          labelInfo={ { labelId: 'title-input-label', labelText: 'Título' } }
          rInfo={ {
            rId: 'title-input', rValue: title, rName: 'title',
          } }
          funcOnChange={ this.changeHandler }
        />

        <LabelInputs
          labelInfo={ { labelId: 'subtitle-input-label', labelText: 'Subtítulo' } }
          rInfo={ {
            rId: 'subtitle-input', rValue: subtitle, rName: 'subtitle',
          } }
          funcOnChange={ this.changeHandler }
        />

        <LabelInputs
          labelInfo={ { labelId: 'image-input-label', labelText: 'Imagem' } }
          rInfo={ {
            rId: 'image-input', rValue: imagePath, rName: 'imagePath',
          } }
          funcOnChange={ this.changeHandler }
        />
        <label htmlFor="StorylineInput" data-testid="storyline-input-label">
          Sinopse
          <textarea id="StorylineInput" data-testid="storyline-input" />
        </label>
        <RatingInput rValue={ rating } funcOnChange={ this.changeHandler } />
        <label htmlFor="GenreInput" data-testid="genre-input-label">
          Gênero
          <select id="GenreInput" data-testid="genre-input">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <ButtonAddMovie addOnClick={ this.submit } />
      </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
