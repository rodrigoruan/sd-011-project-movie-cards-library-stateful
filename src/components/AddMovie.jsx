import React from 'react';
import InputTitleNovie from './InputTitleNovie';
import InputSubTitleNovie from './InputSubTitleNovie';
import InputTextArea from './InputTextArea';
import InputImage from './InputImage';

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

    this.hadleState = this.hadleState.bind(this);
  }

  hadleState({ target }) {
    const { name, value } = target;
    // console.log(target);
    this.setState(() => ({
      [name]: value,
    }));
  }

  render() {
    /* Aqui recebemos as infos do searchBar e passamos para nosso state   */
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitleNovie
          title={ title }
          hadleState={ this.hadleState }
        />
        <br />
        <InputSubTitleNovie
          subtitle={ subtitle }
          hadleState={ this.hadleState }
        />
        <br />
        <InputImage
          imagePath={ imagePath }
          hadleState={ this.hadleState }
        />
        <br />
        <InputTextArea
          storyline={ storyline }
          hadleState={ this.hadleState }
        />

      </form>
    );
  }
}

export default AddMovie;
