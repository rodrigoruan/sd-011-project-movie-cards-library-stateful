import React from 'react';

class Subtitle extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

export default Subtitle;
