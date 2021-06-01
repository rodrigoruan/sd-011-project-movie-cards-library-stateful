import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { func, genre } = this.props;
    return (
      <label htmlFor="i2" data-testid="genre-input-label">
        Gênero
        <select data-testid="genre-input" name="genre" value={ genre } onChange={ func }>
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
  genre: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
