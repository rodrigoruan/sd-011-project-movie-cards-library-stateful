import React from 'react';
import PropTypes from 'prop-types';

class SelectToAddMovies extends React.Component {
  render() {
    const { value, handleStates } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          id="genre"
          data-testid="genre-input"
          onChange={ handleStates }
          value={ value }
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default SelectToAddMovies;

SelectToAddMovies.propTypes = {
  handleStates: PropTypes.func,
  value: PropTypes.string,
};
SelectToAddMovies.defaultProps = {
  handleStates: () => {},
  value: '',
};
