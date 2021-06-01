// State
import React from 'react';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImageInput from './ImageInput';
import GenreInput from './GenreInput';
import RatingInput from './RatingInput';
import StoryLineInput from './StoryLineInput';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleSubmit({ target }) {
    console.log(target);
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { handleInput, handleSubmit } = this;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleInput handleInput={ handleInput } title={ title } />
        <SubtitleInput handleInput={ handleInput } subtitle={ subtitle } />
        <ImageInput handleInput={ handleInput } imagePath={ imagePath } />
        <StoryLineInput handleInput={ handleInput } storyline={ storyline } />
        <RatingInput handleInput={ handleInput } rating={ rating } />
        <GenreInput handleInput={ handleInput } genre={ genre } />
        <div>
          <label htmlFor="send-button">
            <input
              type="submit"
              value="Adicionar Filme"
              data-testid="send-button"
              onClick={ handleSubmit }
            />
          </label>
        </div>
      </form>
    );
  }
}

export default AddMovie;
