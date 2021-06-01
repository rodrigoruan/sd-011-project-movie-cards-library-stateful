import React from 'react';

class StorylineTextarea extends React.Component {
  render() {
    const {
      storyline,
      handleChange,
    } = this.props;
    
    return(
      <div>
        <label data-testid="storyline-input-label" htmlFor="storylineNewMovieId">
            <span>Sinopse</span>

            <textarea
              id="storylineNewMovieId"
              name="storyline"
              value={ storyline }
              onChange={ handleChange }
              data-testid="storyline-input"
            />

          </label>
      </div>
    );
  }
}

export default StorylineTextarea;