import React, { Component } from 'react';
/* import PropTypes from 'prop-types'; */
import TitleInput from './TitleInput';
import SubTitleInput from './SubTitleInput';
import ImagePath from './ImagePath';
import TextareaField from './TextareaField';
import RatingInput from './RatingInput';
import GenreCheck from './GenreCheck';

class AddMovie extends Component {
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

    this.handleState = this.handleState.bind(this);
    this.resetBtn = this.resetBtn.bind(this);
  }

  // atribui valor do input
  handleState(target) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  addNewMovie() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    /* const { onClick } = this.props; */
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form>
        <TitleInput
          value={ title }
          handleState={ this.handleState }
        />
        <SubTitleInput
          value={ subtitle }
          handleState={ this.handleState }
        />
        <ImagePath
          value={ imagePath }
          handleState={ this.handleState }
        />
        <TextareaField
          value={ storyline }
          handleState={ this.handleState }
        />
        <RatingInput
          value={ rating }
          handleState={ this.handleState }
        />
        <GenreCheck
          handleState={ this.handleState }
          value={ genre }
        />
      </form>
    );
  }
}
export default AddMovie;

/* AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: () => { },
}; */
