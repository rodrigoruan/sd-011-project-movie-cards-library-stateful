import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { inputRead, value } = this.props;
    return (
      <label htmlFor="title-id" data-testid="title-input-label">
        Título
        <input
          name="title"
          id="title-id"
          type="text"
          placeholder="Digite o título desejado"
          data-testid="title-input"
          value={ value }
          onChange={ inputRead }
        />
      </label>
    );
  }
}

Title.propTypes = {
  inputRead: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default Title;
