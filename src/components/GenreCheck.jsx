import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenreCheck extends Component {
  render() {
    const { name, title, genre, handleState } = this.props;
    return (
      <label htmlFor={ name }>
        { title }
        <select
          name={ name }
          value={ genre }
          onChange={ handleState }
        >
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thrille">Suspense</option>
        </select>
      </label>
    );
  }
}

export default GenreCheck;

GenreCheck.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  genre: PropTypes.string,
  handleState: PropTypes.func,
};

GenreCheck.defaultProps = {
  name: '',
  title: '',
  genre: '',
  handleState: () => {},
};
