import React from 'react';
import InputSubtitle from '../auxComponents/InputSubtitle';
import InputTitle from '../auxComponents/InputTitle';
import InputImage from '../auxComponents/InputImage';
import InputStoryline from '../auxComponents/InputStoryline';
import InputRating from '../auxComponents/InputRating';
import SelectGenre from '../auxComponents/SelectGenre';

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
    this.stateModify = this.stateModify.bind(this);
  }

  stateModify({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle stateModify={ this.stateModify } title={ title } />
        <InputSubtitle stateModify={ this.stateModify } subtitle={ subtitle } />
        <InputImage stateModify={ this.stateModify } imagePath={ imagePath } />
        <InputStoryline stateModify={ this.stateModify } storyline={ storyline } />
        <InputRating stateModify={ this.stateModify } rating={ rating } />
        <SelectGenre stateModify={ this.stateModify } genre={ genre } />
      </form>
    );
  }
}

export default AddMovie;
