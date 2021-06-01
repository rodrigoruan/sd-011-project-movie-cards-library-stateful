import React from 'react';
import PropTypes from 'prop-types';

class SelectToAddMovies extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          type="select"
          name="genre"
          data-testid="genre-input"
          onChange={ onChange }
          value={ value }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default SelectToAddMovies;

SelectToAddMovies.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
SelectToAddMovies.defaultProps = {
  onChange: () => {},
  value: '',
};
