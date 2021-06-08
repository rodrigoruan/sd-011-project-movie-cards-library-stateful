import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { alias, value, func } = this.props;
    return (
      <input
        data-testid={ alias.replace(/[A-Z]\w+/, '') + '-input' }
        type={ alias === 'rating' ? 'number' : 'text' }
        value={ value }
        onChange={ func }
      />
    );
  }
}

Input.propTypes = {
  alias: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  func: PropTypes.string.isRequired,
};

export default Input;
