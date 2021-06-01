import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  // constructor() {
  //   super();
  //   this.handleTitle = this.handleTitle.bind(this);
  // }

  render() {
    const { handleTitle, handleSubtitle } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name=""
            id=""
            data-testid="title-input"
            onChange={ handleTitle }
          />
        </label>
        <label htmlFor="input-subtitle" ata-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name=""
            id=""
            value=""
            data-testid="subtitle-input"
            onChange={ handleSubtitle }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  handleTitle: PropTypes.func.isRequired,
  handleSubtitle: PropTypes.func.isRequired,
};

export default AddMovie;
