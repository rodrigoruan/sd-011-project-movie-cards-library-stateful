// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class GenericInput extends React.Component {
  render() {
    const { lblInfo, inInfo, funcOnChange } = this.props;
    const { lblId, lblText } = lblInfo;
    const { inId, inVal, inName } = inInfo;
    return (
      <label htmlFor={ inId } data-testid={ lblId }>
        { lblText }
        <input
          type="text"
          value={ inVal }
          name={ inName }
          onChange={ funcOnChange }
          data-testid={ inId }
        />
      </label>
    );
  }
}

GenericInput.propTypes = {
  lblInfo: PropTypes.shape({
    lblId: PropTypes.string,
    lblText: PropTypes.string,
  }).isRequired,
  inInfo: PropTypes.shape({
    inId: PropTypes.string,
    inVal: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    inName: PropTypes.string,
  }).isRequired,
  funcOnChange: PropTypes.func.isRequired,
};

export default GenericInput;
