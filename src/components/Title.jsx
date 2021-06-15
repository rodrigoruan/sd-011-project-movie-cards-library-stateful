import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, handleChangeTitle } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          data-testid="title-input"
          name="title"
          type="text"
          value={ title }
          onChange={ handleChangeTitle }
        />
      </label>
    );
  }
}
Title.propTypes = {
  title: PropTypes.string,
  handleChangeTitle: PropTypes.func,
}.isRequired;

export default Title;
