import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { value, onSelectedGenreChange } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="select-input">
        Filtrar por gênero
        <select
          name="select-input"
          data-testid="select-input"
          type="select"
          value={ value }
          onChange={ onSelectedGenreChange }
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default Select;

Select.propTypes = {
  value: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};
Select.defaultProps = {
  value: '',
  onSelectedGenreChange: () => {},
};
