import React from 'react';

class Title extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            name="title"
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

export default Title;
