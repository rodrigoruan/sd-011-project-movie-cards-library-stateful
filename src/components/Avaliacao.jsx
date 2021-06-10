import React from 'react';
import PropTypes from 'prop-types';

class Avaliacao extends React.Component {
  render() {
    const { value, onChange } = this.props;
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
          onChange={ onChange }
        />
      </label>
    );
  }
}
Avaliacao.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Avaliacao;
