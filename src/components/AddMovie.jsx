// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import GenericInput from './AddMovieComponents/AddMovie-GenericInput';
import RatingInput from './AddMovieComponents/AddMovie-RatingInput';
import GenreSelect from './AddMovieComponents/AddMovie-Select';
import StoryTextArea from './AddMovieComponents/AddMovie-Textarea';
import BtnNewMovie from './AddMovieComponents/AddMovie-Button';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    };
    this.initialState = this.state;

    this.changeHandler = this.changeHandler.bind(this);
    this.submitMovieData = this.submitMovieData.bind(this);
  }

  changeHandler({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  submitMovieData(event) {
    event.preventDefault();
    const { onClick } = this.props;
    const { title, subtitle, storyline, imagePath, rating, genre } = this.state;
    onClick({ title, subtitle, storyline, imagePath, rating, genre });
    this.setState(this.initialState);
  }

  render() {
    const { title, subtitle, storyline, imagePath, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <GenericInput
            lblInfo={ { lblId: 'title-input-label', lblText: 'Título' } }
            inInfo={ {
              inId: 'title-input', inVal: title, inName: 'title',
            } }
            funcOnChange={ this.changeHandler }
          />

          <GenericInput
            lblInfo={ { lblId: 'subtitle-input-label', lblText: 'Subtítulo' } }
            inInfo={ {
              inId: 'subtitle-input', inVal: subtitle, inName: 'subtitle',
            } }
            funcOnChange={ this.changeHandler }
          />

          <GenericInput
            lblInfo={ { lblId: 'image-input-label', lblText: 'Imagem' } }
            inInfo={ {
              inId: 'image-input', inVal: imagePath, inName: 'imagePath',
            } }
            funcOnChange={ this.changeHandler }
          />

          <StoryTextArea value={ storyline } funcOnChange={ this.changeHandler } />

          <RatingInput inVal={ rating } funcOnChange={ this.changeHandler } />

          <GenreSelect value={ genre } funcOnChange={ this.changeHandler } />

          <BtnNewMovie funcOnClick={ this.submitMovieData } />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
