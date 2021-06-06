import React from 'react';
import PropTypes from 'prop-types';

class SelectGenre extends React.Component {
  render() {
    const { changeInputs, value } = this.props;
    return (
      <label
        htmlFor="addMovie"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          onChange={ changeInputs }
          value={ value }
          type="text"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}
export default SelectGenre;

SelectGenre.propTypes = {
  changeInputs: PropTypes.func,
  value: PropTypes.string,
};

SelectGenre.defaultProps = {
  changeInputs: () => {},
  value: '',
};
