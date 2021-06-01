import React, { Component } from "react";

class TextAreaStory extends Component {
  render() {
    const {
      value,
      inputFunction
    } = this.props;
    return (
      <label
        data-testid="storyline-input-label"
        htmlFor="storyline-input"
      >
        Sinopse
        <textarea
          name="storyLine"
          data-testid="storyline-input"
          value={ value }
          onChange={ inputFunction }
        />
        <br />
      </label>
    );
  }
}

export default TextAreaStory;
