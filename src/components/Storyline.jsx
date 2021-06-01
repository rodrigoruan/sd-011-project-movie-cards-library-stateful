import React from 'react';

class Storyline extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            type="text"
            name="storyline"
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

export default Storyline;
