import React from 'react';
import PropTypes from 'prop-types';

class TitleInput extends React.Component {
  render() {
    const { title, handleInput } = this.props;
    return (
      <div>
        <label
          className="add-label"
          data-testid="title-input-label"
          htmlFor="title"
        >
          Título
          <input
            type="text"
            className="add-input"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ handleInput }
          />
        </label>
      </div>
    );
  }
}

TitleInput.propTypes = {
  title: PropTypes.string,
  handleInput: PropTypes.func,
}.isRequired;

export default TitleInput;
