import React from 'react';

class SubtitleInput extends React.Component {
  render() {
    const { 
      subtitle,
      handleChange,
    } = this.props;

    return(
      <div>
        <label data-testid="subtitle-input-label" htmlFor="subtitleNewMovieId">
            <span>Subtítulo</span>

            <input
              id="subtitleNewMovieId"
              type="text"
              name="subtitle"
              value={ subtitle }
              onChange={ handleChange }
              data-testid="subtitle-input"
            />

          </label>
      </div>
    );
  }
}

export default SubtitleInput;