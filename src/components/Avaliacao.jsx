import React from 'react';
import PropTypes from 'prop-types';

class Avaliacao extends React.Component {
  render() {
    const { changeInputs, value } = this.props;
    return (
      <label htmlFor="addMovie" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          onChange={ changeInputs }
          type="number"
          name="rating"
          value={ value }
        />
      </label>
    );
  }
}
export default Avaliacao;

Avaliacao.propTypes = {
  changeInputs: PropTypes.func,
  value: PropTypes.string,
};

Avaliacao.defaultProps = {
  changeInputs: () => {},
  value: '',
};
