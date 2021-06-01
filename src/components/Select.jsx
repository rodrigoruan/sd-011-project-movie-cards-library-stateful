import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { handler, text, dataLabel, dataInput, genre } = this.props;
    return (
      <label data-testid={ dataLabel } htmlFor="input">
        {text}
        <select value={ genre } data-testid={ dataInput } onChange={ handler }>
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
  storyline: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
