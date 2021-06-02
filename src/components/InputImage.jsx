import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { state, func } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ state }
          data-testid="image-input"
          onChange={ func }
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  state: PropTypes.string,
  func: PropTypes.objectOf(),
};

InputImage.defaultProps = {
  state: '',
  func: '',
};

export default InputImage;
