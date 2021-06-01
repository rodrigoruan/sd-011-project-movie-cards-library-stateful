import React from 'react';
import PropTypes from 'prop-types';

export default class ImagePath extends React.Component {
  render() {
    const { value, changeState } = this.props;

    return (
      <label data-testid="image-input-label" htmlFor="image">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ value }
          onChange={ changeState }
          data-testid="image-input"
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  value: PropTypes.string,
  changeState: PropTypes.func,
};

ImagePath.defaultProps = {
  value: '',
  changeState: () => {},
};
