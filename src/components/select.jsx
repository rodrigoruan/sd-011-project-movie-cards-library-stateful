import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { genre, change } = this.props;
    return (
      <label htmlFor="selectGenre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="selectGenre"
          value={ genre }
          data-testid="genre-input"
          onChange={ change }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>

        </select>
      </label>
    );
  }
}

Select.propTypes = {
  genre: PropTypes.number,
  change: PropTypes.func,
};

Select.defaultProps = {
  genre: 0,
  change: () => {},
};

export default Select;
