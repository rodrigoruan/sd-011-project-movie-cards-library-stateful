import React from 'react';
import PropTypes from 'prop-types';

export default class Subtitle extends React.Component {
  render() {
    const { value, changeState } = this.props;

    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ value }
          onChange={ changeState }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  value: PropTypes.string,
  changeState: PropTypes.func,
};

Subtitle.defaultProps = {
  value: '',
  changeState: () => {},
};
