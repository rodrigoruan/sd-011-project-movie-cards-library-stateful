import React from 'react';
import InputTitleNovie from './InputTitleNovie';
import InputSubTitleNovie from './InputSubTitleNovie';
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

        <InputImage
          imagePath={ imagePath }
          hadleState={ this.hadleState }
        />

      </form>
    );
  }
}

export default AddMovie;
