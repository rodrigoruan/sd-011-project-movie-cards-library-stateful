import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { inputRead, value } = this.props;
    return (
      <label htmlFor="subtitle-id" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          id="subtitle-id"
          type="text"
          placeholder="Digite o subtítulo desejado"
          data-testid="subtitle-input"
          value={ value }
          onChange={ inputRead }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  inputRead: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default Subtitle;
