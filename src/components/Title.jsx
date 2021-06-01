import React from 'react';
import PropTypes from 'prop-types';

export default class Title extends React.Component {
  render() {
    const { value, changeState } = this.props;

    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          type="text"
          name="title"
          value={ value }
          onChange={ changeState }
          data-testid="title-input"
        />
      </label>
    );
  }
}

Title.propTypes = {
  value: PropTypes.string,
  changeState: PropTypes.func,
};

Title.defaultProps = {
  value: '',
  changeState: () => {},
};
