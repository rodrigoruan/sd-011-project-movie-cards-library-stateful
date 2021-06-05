import React from 'react';
import PropTypes from 'prop-types';

class AddTextarea extends React.Component {
  render() {
    const { handleChange, sinopse } = this.props;
    return (
      <label htmlFor="textarea" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          data-testid="storyline-input"
          onChange={ handleChange }
        >
          { sinopse }
        </textarea>
      </label>
    );
  }
}

AddTextarea.propTypes = {
  sinopse: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default AddTextarea;
