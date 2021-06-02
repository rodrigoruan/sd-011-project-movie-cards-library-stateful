import React from 'react';
import PropTypes from 'prop-types';
import AddTitle from './AddTitle';
import AddSubtitle from './AddSubtitle';

class AddMovie extends React.Component {
  // constructor() {
  //   super();
  //   this.handleTitle = this.handleTitle.bind(this);
  // }

  render() {
    const form = this.props;
    const title = this.props;
    const subtitle = this.props;
    const { imagePath, handleImage } = this.props;
    const { handleSinopse, sinopse } = this.props;
    return (
      <form data-testid="add-movie-form" id="add-movie-form">
        <AddTitle title={ title } />
        <AddSubtitle subtitle={ subtitle } />
        <label id="image-input-label" htmlFor="image" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name=""
            id="image-input"
            value={ imagePath }
            data-testid="image-input"
            onChange={ handleImage }
          />
        </label>
        <label
          id="storyline-input-label"
          htmlFor="textarea"
          data-testid="storyline-input-label"
        >
          Sinopse
          <textarea
            name=""
            id="storyline-input'"
            cols="30"
            rows="10"
            data-testid="storyline-input"
            onChange={ handleSinopse }
          >
            { sinopse }
          </textarea>
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleImage: PropTypes.func.isRequired,
  handleSinopse: PropTypes.func.isRequired,
  sinopse: PropTypes.string.isRequired,
};

export default AddMovie;
