import React from 'react';
import PropTypes from 'prop-types';

class Option extends React.Component {
  render() {
    const { option } = this.props;
    return (
      <option value={ option.value } data-testid={ option.dataTestId }>
        { option.text }
      </option>
    );
  }
}

Option.propTypes = {
  option: PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.string,
    dataTestId: PropTypes.string,
  }).isRequired,
};

export default Option;
