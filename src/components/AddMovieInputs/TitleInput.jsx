import React from 'react';
import PropTypes from 'prop-types';

class TitleInput extends React.Component {
  render() {
    const {
      title,
      handleChange,
    } = this.props;

    return (
      <div>
        <label data-testid="title-input-label" htmlFor="titleNewMovieId">
          <span>Título</span>

          <input
            id="titleNewMovieId"
            type="text"
            name="title"
            value={ title }
            onChange={ handleChange }
            data-testid="title-input"
          />

        </label>
      </div>
    );
  }
}

TitleInput.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TitleInput;
