import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { handler, text, dataLabel, dataInput, genre, name } = this.props;
    return (
      <label data-testid={ dataLabel } htmlFor="input">
        {text}
        <select
          name={ name }
          value={ genre }
          data-testid={ dataInput }
          onChange={ handler }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default Select;

Select.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  dataLabel: PropTypes.string.isRequired,
  dataInput: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};
