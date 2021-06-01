// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import LabelInputs from './LblInputs';
import RatingInput from './RatingInput';
import ButtonAddMovie from './ButtonAddMovie';
import Story from './StoryLine';
import GenreSelect from './GenreSelector';

const state0 = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};
class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = state0;
    this.changeHandler = this.changeHandler.bind(this);
    this.submit = this.submit.bind(this);
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
    const { title, subtitle, genre, storyline, imagePath, rating } = this.state;
    return (
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
        <Story value={ storyline } funcOnChange={ this.changeHandler } />
        <RatingInput rValue={ rating } funcOnChange={ this.changeHandler } />
        <GenreSelect value={ genre } funcOnChange={ this.changeHandler } />
        <ButtonAddMovie addOnClick={ this.submit } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
