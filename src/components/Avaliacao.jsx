import React from 'react';
import PropTypes from 'prop-types';

class Avaliacao extends React.Component {
  render() {
    const { value, functionOnChange } = this.props;
    return (
      <label
        htmlFor="rating-input-label"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          name="rating"
          value={ value }
          type="number"
          data-testid="rating-input"
          onChange={ functionOnChange }
        />
      </label>
    );
  }
}
Avaliacao.propTypes = {
  value: PropTypes.string.isRequired,
  functionOnChange: PropTypes.func.isRequired,
};
export default Avaliacao;
