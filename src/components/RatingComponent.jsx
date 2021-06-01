import React from 'react';

class RatingComponent extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label data-testid="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            name="rating"
            value={ value}
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

export default RatingComponent;
